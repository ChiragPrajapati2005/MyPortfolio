

export default function Card() {

   const handleclick = (data) => {
      if(!data.instock){
         alert("Item is out of stock");
         
      }
      else if(data.instock){
         alert("Item added to cart");
      }
   }
   const cardData = [{ Image : "https://thumbs.dreamstime.com/z/amazon-headquarters-silicon-valley-november-sunnyvale-ca-usa-located-san-francisco-bay-area-130784170.jpg", name : "Amazon Basices" , Description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae atque recusandae eum dolorem i debitis laudantium impedit incidunt.", instock : true},
      {Image : "https://static1.thetravelimages.com/wordpress/wp-content/uploads/2023/04/exterior-view-of-a-google-headquarters-building.jpg" , name : "Google" , Description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae atque recusandae eum dolorem i debitis laudantium impedit incidunt.", instock : false},
      {Image : "https://images.axios.com/knsqCzAUJasO2gvNeJIT75g36-k=/0x580:5568x3712/1920x1080/2018/11/30/1543613757886.jpg" , name : "Microsoft" , Description : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae atque recusandae eum dolorem i debitis laudantium impedit incidunt.", instock : true}
   ];
  return (
    <div className='min-h-screen bg-zinc-400 w-full flex justify-center gap-10 items-center'>
      {cardData.map((cardData, index) => (
        <div className="w-60 h-auto bg-zinc-100 rounded-lg " key={index}>
          <img className="rounded-t-lg h-40 w-full" src={cardData.Image} alt="" />
          <div className="font-bold  px-2 py-2"><h1>{cardData.name}</h1></div>
          <div className="px-2"><p>{cardData.Description}</p></div>
          <button onClick={() => handleclick(cardData)} className={` bg-blue-500 text-white text-xs px-2 py-1 font-bold mx-2 my-2 p-1 ${cardData.instock ? 'bg-sky-700' : 'bg-red-700'} rounded-md`}>
            {cardData.instock ? "Add to cart" : "Out of stock"}
          </button>
        </div>
      ))}
    </div>
  )
}


    
  

