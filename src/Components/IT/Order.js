import React from "react";
import MaterialTable from "material-table";
import { Breadcrumb } from "react-bootstrap";

export default function Order() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Produkt", field: "produkt" },
      { title: "Test", field: "test" },
      { title: "Antal", field: "antal", type: "numeric" },
      { title: "Beskrivning", field: "beskrivning", button: "link" },
      { title: "Trycktest", field: "tryckt" }
    ],
    data: [
      { produkt: "Bildskärm", test: "wow", antal: 1, beskrivning: "test" },
      {
        produkt: "Dator mus",
        test: "Bara",
        antal: 7,
        beskrivning: "dett är en dator mus"
      },
      {
        produkt: "Dator mus",
        test: "Bara",
        antal: 2,
        beskrivning: "du vet vad det är"
      },
      {
        produkt: "Dator mus",
        test: "Bara",
        antal: 1,
        beskrivning: "dett är en dator mus"
      }
    ]
  });

  return (
    <>
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item href="/#/">Hem</Breadcrumb.Item>
        <Breadcrumb.Item href="/it">IT-support</Breadcrumb.Item>
        <Breadcrumb.Item active>Beställning</Breadcrumb.Item>
      </Breadcrumb>

      <MaterialTable
        variant="dark"
        title="Beställning"
        data={state.data}
        columns={state.columns}
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 400);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 400);
            }),
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 400);
            })
        }}
      />
    </>
  );
}
