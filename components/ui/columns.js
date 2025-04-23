

export const columns = [

    
        {
          title: 'Name',
          dataIndex: 'component_name',
          key: 'component_name',
          render : (text)=><a>{text}</a>,
       

          sorter: (a, b) => a.component_name.localeCompare(b.component_name),
          sortDirections: ['ascend', 'descend'],
         
        },
        {
            title: 'Component_id',
            dataIndex: 'component_id',
            key: 'component_id',

            sorter: (a, b) => a.component_name.localeCompare(b.component_name),
            sortDirections: ['ascend', 'descend'],
            

        },
      
       {
        title: 'Subcomponents',
        dataIndex: 'subcomponents',
        key: 'subcomponents',
        render: (subcomponents) =>
          subcomponents?.length
            ? subcomponents.map((sub) => sub.component_name).join(', ')
            : 'None',
            sorter: (a, b) => a.component_name.localeCompare(b.component_name),
            sortDirections: ['ascend', 'descend'],

       },
      
       {
        title: 'Damaged',
        dataIndex: 'subcomponents',
        key: 'damaged_quantity',
        render: (subcomponents) =>
            
          subcomponents?.length
            ? subcomponents.map((sub) => sub.damaged_quantity)
            : 'None',
        
            sorter: (a, b) => a.component_name.localeCompare(b.component_name),
            sortDirections: ['ascend', 'descend'],

           
       },
      
       {
        title: 'Discarded',
        dataIndex: 'subcomponents',
        key: 'discarded_quantity',
        render: (subcomponents) =>
          subcomponents?.length
            ? subcomponents.map((sub) => sub.discarded_quantity)
            : 'None',
            sorter: (a, b) => a.component_name.localeCompare(b.component_name),
            sortDirections: ['ascend', 'descend'],

       },
      
       {
        title: 'Total',
        dataIndex: 'subcomponents',
        key: 'total_quantiy',
        render: (subcomponents) =>
          subcomponents?.length
            ? subcomponents.map((sub) => sub.total_quantity)
            : 'None',
        
            sorter: (a, b) => a.component_name.localeCompare(b.component_name),
            sortDirections: ['ascend', 'descend'],
       },
      
]