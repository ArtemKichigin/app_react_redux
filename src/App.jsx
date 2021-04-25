import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './App.css'
import {addCustomerAction, removeCustomerAction} from './store/customerReducer'
import {fetchCustomers} from './asyncActions/customers'

function App(){

  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }
  return(
    <div className='app'>
      <div style={{display: 'flex'}}>
        <p>{cash}</p>
        <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
        <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
        <button onClick={() => addCustomer(prompt())}>Add customer</button>
        <button onClick={() => dispatch(fetchCustomers())}>Gets customers from DB</button>
        
      </div>
      {customers.length > 0 ?
        <div>
          {customers.map(customer => <div onClick={() => removeCustomer(customer)} style={{fontSize: '2rem', border: '1px solid green', padding: '10px', marginTop: '10px'}}>{customer.name}</div>)}
        </div>
        :
        <div style={{fontSize: '2rem', marginTop:20}}>
          No comments!
        </div>
        }
    </div>
  )
}

export default App