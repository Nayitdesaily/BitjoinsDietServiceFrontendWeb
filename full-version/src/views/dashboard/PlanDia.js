import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function PlanDia() {

    const [diet, setDiet] = useState({})
    const [idPlan, setIdPlan] = useState(null)

    useEffect(() => {
        const getPlan = async () => {
            await axios.get('https://dietservice.bitjoins.pe/api/plan_alimentacion/last/379')
            .then(res => {setIdPlan(res.data.data.id)})

            await axios.get(`https://dietservice.bitjoins.pe/api/plan-alimentacion/dieta-of-today/${idPlan}`)
            .then(res => {setDiet(res.data)})
            
        }

        getPlan()


    },[])

    console.log(diet)
    console.log(typeof(idPlan))

    return (
        <div>
            <h4>Plan De Alimentacion</h4>
        </div>
    )
}