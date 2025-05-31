import React from 'react'

const Filter = () => {
    return (
        <div className='pt-4'>
            <div className='flex flex-wrap gap-3 items-center font-bold text-lg  justify-evenly'>
                <label htmlFor="country" className="sr-only">Country</label>
                <select name="country" className='box'>
                    <option value="">Country</option>
                    <option value="india">India</option>
                    <option value="australia">Australia</option>
                </select>
                <label htmlFor="Time" className="sr-only">Time</label>
                <select name="time" className='box'>
                    <option value="">Time</option>
                    <option value="2">2 minutes</option>
                    <option value="5">5 minutes</option>
                </select>
                <label htmlFor="Mood" className="sr-only">Mood</label>
                <select name="mood" className='box'>
                    <option value="">Mood</option>
                    <option value="happy">Happy</option>
                    <option value="healthy">Healthy</option>
                    <option value="energetic">Energetic</option>
                    <option value="party">Party</option>
                </select>
                <label htmlFor="Diet" className="sr-only">Diet</label>
                <select name="diet" className='box'>
                    <option value="">Diet</option>
                    <option value="veg">Veg</option>
                    <option value="nonveg">Non-Veg</option>
                </select>
                <label htmlFor="Ingredienents" className="sr-only">Ingredients</label>
                <select name="ingredients" className='box'>
                    <option value="">Ingredients</option>
                    <option value="vegetable">Vegetable</option>
                    <option value="fruit">Fruit</option>
                    <option value="flour">Flour</option>
                </select>
            </div>
        </div>
    )
}

export default Filter
