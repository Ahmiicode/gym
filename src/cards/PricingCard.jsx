import { motion } from "framer-motion";


export default function PricingCard({plan}){


return (

<motion.div

whileHover={{
y:-15,
scale:1.03
}}

transition={{
type:"spring",
stiffness:200
}}

className={`
relative
p-8
rounded-[35px]
shadow-xl
border
bg-[#f8f1eb]

${plan.popular 
? "border-[#b89052] scale-105"
: "border-[#ead7bd]"
}

`}

>


{
plan.popular && (

<div
className="
absolute
top-5
right-5
bg-[#b89052]
text-white
px-4
py-1
rounded-full
text-xs
"
>

POPULAR

</div>

)
}



<h3
className="
text-2xl
font-serif
text-[#2b211d]
"
>

{plan.title}

</h3>



<h2
className="
text-5xl
mt-5
text-[#b89052]
font-bold
"
>

{plan.price}

</h2>



<ul
className="
mt-6
space-y-3
text-gray-600
"
>

{
plan.features.map((item,index)=>(

<li key={index}>
✓ {item}
</li>

))
}

</ul>



<button
className="
mt-8
w-full
py-3
rounded-full
bg-[#b89052]
text-white
"
>

Book Now

</button>


</motion.div>

)

}