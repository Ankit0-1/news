import React, { useEffect, useState } from 'react'
import { MyContext } from '../context/GlobalContext'
import { useContext } from 'react'
import Card from './cards/Card'
import Pagination from './Pagination'
import CapsuleCard from './cards/TableCard'

function Content() {
  const {data, fetchData, currentPage, viewType }= useContext(MyContext);
  const contentPerPage = 6;
  
  useEffect(() => {
    fetchData();
  }, []);

  let dataToShow = [];
  
  for(let i =1; i<=contentPerPage; i++){
    console.log(currentPage)
    const currentIndex = currentPage === 1 ? i : (currentPage-1)*contentPerPage +i
    console.log(data, dataToShow, currentIndex)

     data.length && dataToShow.push(data[currentIndex-1]);
  }
  console.log(dataToShow, data)

  return (<>
    <div className={viewType === 'GRID' ? 'box-cards' : 'capsule-cards'}>{
    dataToShow.map((item) => { 
        // to get only required boxes if no item found dont show anything
          if(!item){
            return
          }
    
         return viewType === 'GRID' ? 
          <Card data={data} item={item} />
         : 
         <CapsuleCard data={data} item={item}/>
        })
      }
    </div>
    <Pagination />
  </>
  )
}

export default Content