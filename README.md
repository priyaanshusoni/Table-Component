# 📊 Table Component

A customizable and reusable React table component built with Ant Design, supporting features like sorting, filtering, and dynamic styling.

## 🚀 Features

- **Customizable Columns**: Define columns with sorting and filtering options.
- **Dynamic Styling**: Apply custom styles to headers and cells.
- **Reusable Component**: Easily integrate into various parts of your application.

## 📦 Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/priyaanshusoni/Table-Component.git
   cd Table-Component
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

## 🛠️ Usage

1. **Import the Component**:

   ```tsx
   import TableComponent from './components/ui/TableComponent';
   import { columns } from './components/ui/columns';
   ```

2. **Prepare Your Data**:

   Ensure your data matches the expected format:

   ```tsx
   const data = [
     {
       component_name: 'Component A',
       component_id: '001',
       subcomponents: [
         {
           component_name: 'Subcomponent A1',
           damaged_quantity: 2,
           discarded_quantity: 1,
           total_quantity: 10,
         },
         // ...more subcomponents
       ],
     },
     // ...more components
   ];
   ```

3. **Render the Table**:

   ```tsx
   <TableComponent data={data} columns={columns} />
   ```

## 🎨 Customization

### 🔹 Changing Column Background Color

1. **Add a `className` to the Column Definition**:

   ```tsx
   {
     title: 'Component Name',
     dataIndex: 'component_name',
     key: 'component_name',
     className: 'custom-column',
   }
   ```

2. **Define the CSS Class**:

   ```css
   .custom-column {
     background-color: #f0f2f5;
   }
   ```

### 🔹 Disabling Header Hover Effect

To disable the default hover effect on table headers, add this to your CSS:

```css
.ant-table-thead > tr:hover > th {
  background: inherit !important;
}
```

## 📂 Project Structure

```
Table-Component/
├── components/
│   └── ui/
│       ├── TableComponent.tsx
│       └── columns.ts
├── pages/
│   └── index.tsx
├── styles/
│   └── globals.css
├── package.json
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/YourFeature
   ```

3. Commit your changes:

   ```bash
   git commit -m 'Add YourFeature'
   ```

4. Push to the branch:

   ```bash
   git push origin feature/YourFeature
   ```

5. Open a pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).
