import { Table , ConfigProvider  } from "antd";

export default function TableComponent({data , columns}){

    return (
        <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "white",
              headerColor: "black",
              colorBgContainer: "",
              colorText: "white",
              borderColor : "white",
              borderRadius : "16px",
              colorBorderBg : "white",
             colorBgBase : "white",
             rowHoverBg : "transparent" ,
             
            },
          },
        }}
      >
        <Table
          className="p-32 m-auto text-white "
          dataSource={data}
          columns={columns}
         
        />
      </ConfigProvider>

    )
}

