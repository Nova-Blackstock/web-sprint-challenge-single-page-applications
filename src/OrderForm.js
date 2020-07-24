import React from 'react'


export default function OrderForm(props){
    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
    } = props

    const onSubmit = e =>{
        e.preventDefault()
        submit()
    }

    const onCheckboxChange = e =>{
        const { name, checked } = e.target
        checkboxChange(name, checked)
    }

    const onInputChange = e =>{
        const { name, value } = e.target
        inputChange(name, value)
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>You must Choose</h2>

                <button
                    className='submitBtn'
                    disabled={disabled}
                >
                    Submit
                </button>

                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.size}</div>
                    <div>{errors.instructions}</div>
                </div>
            </div>

            <div className='form-group-inputs'>
                <h4>Choose Wisely</h4>
                <label>Name
                    <input
                        value={values.username}
                        onChange={onInputChange}
                        name='username'
                        type='text'
                    />
                </label>
                <label>Size
                    <select
                        onChange={onInputChange}
                        value={values.size}
                        name='size'
                    >
                        <option value=''>- Sizes -</option>
                        <option value='small'>Small</option>
                        <option className='medium' value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='xl'>XL</option>
                    </select>
                </label>
                <label>Special Instructions
                    <input
                        value={values.instructions}
                        onChange={onInputChange}
                        name='instructions'
                        type='text'
                    />
                </label>
            </div>

            <div className='form-group-checkboxes'>
                <h4>Toppings</h4>
                <label>Pepperoni
                    <input
                        type='checkbox'
                        name='pepperoni'
                        checked={values.toppings.pepperoni === true}
                        onChange={onCheckboxChange}
                    />
                </label>
                <label>Beef
                    <input
                        type='checkbox'
                        name='beef'
                        checked={values.toppings.beef === true}
                        onChange={onCheckboxChange}
                    />
                </label>
                <label>Cheese
                    <input
                        type='checkbox'
                        name='cheese'
                        checked={values.toppings.cheese === true}
                        onChange={onCheckboxChange}
                    />
                </label>
                <label>Pineapple
                    <input
                        type='checkbox'
                        name='pineapple'
                        checked={values.toppings.pineapple === true}
                        onChange={onCheckboxChange}
                    />
                </label>
            </div>
        </form>
    )
}