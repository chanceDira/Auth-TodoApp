import React from 'react'
import Header from '../../components/Header/Header'

export default function Home({currentUser}) {
    return (
        <div className='wrapper'>
            <Header currentUser={currentUser} />
            <br></br>
            <br></br>
            <div className='container'>
                <form autoComplete='off' className='form-group'>
                    {currentUser && <>
                        <input type='text' placeholder="Enter TODO's"
                            className='form-control' required
                           
                        />
                        <br></br>
                        <div style={{width: 100+'%',
                        display: 'flex', justifyContent: 'flex-end'}}>
                            <button type='submit' className='btn btn-success'
                                style={{width: 100+'%'}}>
                                    ADD
                            </button>
                        </div>
                       
                    </>}
                    
                    {!currentUser && <>
                        <input type='text' placeholder="Enter TODO's"
                            className='form-control' required disabled
                        />
                        <br></br>
                        <div style={{width: 100+'%',
                        display: 'flex', justifyContent: 'flex-end'}}>
                            <button type='submit' className='btn btn-success'
                                disabled style={{width: 100+'%'}}>
                                    ADD
                            </button>
                        </div>
                        <div className='error-msg'>
                            Please register your account or login to use application
                        </div>
                    </>}
                </form>
            </div>
        </div>
    )
}

