import { Column } from "primereact/column";
import Datatable from "../../components/datatable/Datatable";

const HomeDatatable: React.FC = () => {
  return (
    <>
      <Datatable
        value={[
          { code: 1, name: "tan", category: "none", quantity: 10 },
          { code: 3, name: "tan", category: "none", quantity: 10 },
          { code: 4, name: "tan", category: "none", quantity: 10 },
          { code: 1, name: "tan", category: "none", quantity: 10 },
          { code: 1, name: "tan", category: "none", quantity: 10 },
          { code: 1, name: "tan", category: "none", quantity: 10 },
          { code: 1, name: "tan", category: "none", quantity: 10 },
          { code: 1, name: "tan", category: "none", quantity: 10 },
          { code: 1, name: "tan", category: "none", quantity: 10 },
          { code: 1, name: "tan", category: "none", quantity: 10 },
          { code: 1, name: "tan", category: "none", quantity: 10 },
          { code: 1, name: "tan", category: "none", quantity: 10 },
          { code: 1, name: "tan", category: "none", quantity: 10 },
          { code: 1, name: "tan", category: "none", quantity: 10 },
          { code: 1, name: "tan", category: "none", quantity: 10 },
          { code: 1, name: "tan", category: "none", quantity: 10 },
        ]}
      >
        <Column sortable field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </Datatable>
    </>
  );
};

export default HomeDatatable
