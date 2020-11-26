import React from 'react'
import './Total.css'
import CurrencyFormat from 'react-currency-format';

function Total({value, items}) {
    return (
        <div className="total">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                    Number of Items: 
                    <strong>{items}</strong>
                    Total: 
                    <strong>{value}</strong>
                    </>
                )}

                decimalScale={2}
                value={value}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Total
