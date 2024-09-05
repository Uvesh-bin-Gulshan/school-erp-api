// // src/components/ExamTimeTable/page.tsx

// import React from 'react';
// import ViewExamTimeTable from './ViewExamTimeTable';
// import { getExamTimeTableList } from '@/lib/services';
// import AddExamTimeTable from './AddExamTimeTable';
// import Sidebar from '@/app/_component/SideBar';
// import { BreadcrumbWithCustomSeparator } from '@/app/_component/BreadCrumb';

// const items = [
//   { href: "/", label: "Home" },
//   { href: "/components", label: "Components" },
//   { label: "Exam Time Tables" },
// ];

// const Page = async () => {
//   const data = await getExamTimeTableList(); // Implement this service
//   console.log(data);

//   return (
//     <>
//       <Sidebar>
//         <div className=''>
//           <BreadcrumbWithCustomSeparator items={items} separator={<span> :: </span>} />
//         </div>

//         <div className='m-12 bg-white p-4'>
//           <AddExamTimeTable />
//           <ViewExamTimeTable data={data} />
//         </div>
//       </Sidebar>
//     </>
//   )
// }

// export default Page;
