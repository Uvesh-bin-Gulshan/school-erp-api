import React from 'react'
interface PageTitleProps{
title:string;
description:string;

}
const PageTitle:React.FC<PageTitleProps> = ({title,description}) => {
  return (
<>
<div className='mr-[30%]'>
  <p className='text-sm capitalize '>
   {title} 
  </p>
  <p className='text-sm capitalize'>
{description}
  </p>
</div>

</>

)
}

export default PageTitle