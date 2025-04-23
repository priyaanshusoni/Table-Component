import React from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import TableComponent from '@/components/ui/table';
import { columns } from '../components/ui/columns';

// Define the shape of your data (based on your table usage)
interface Subcomponent {
  component_name: string;
  damaged_quantity: number;
  discarded_quantity: number;
  total_quantity: number;
}

export interface Item {
  component_name: string;
  component_id: string;
  subcomponents: Subcomponent[];
}

interface PageProps {
  items: Item[];
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const response = await axios.get('https://dev.electorq.com/dummy/inventory');
  const items: Item[] = response.data;

  return {
    props: {
      items,
    },
  };
};

const Page: React.FC<PageProps> = ({ items }) => {
  return <TableComponent data={items} columns={columns} />;
};

export default Page;
