import React from 'react';
import '../App.scss';
import visa from './img/visa.PNG'
import TabNav from '../coponents/TabNav'
import Tab from '../coponents/Tab';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'Home'
        }
    }
    setSelected = (tab) => {
        this.setState({ selected: tab });
    }
    render() {
        return (


            <div className="App mt-4" >
                <TabNav tabs={['YOURGIFT', 'DONORINFOMATION', 'PAYMENT']} selected={this.state.selected} setSelected={this.setSelected}>
                    <div >
                        <Tab isSelected={this.state.selected === 'YOURGIFT'}>
                            <div></div>
                            <div className='donate12' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <div className='oneTime'><p>One Time Donation </p> </div>
                                <div className='monthly'> <p>Monthly Donation</p></div>
                                <div></div>
                            </div>
                            <div className='dolor'>
                                <div className='dolor1'>$25</div>
                                <div className='dolor2'>$50</div>
                                <div className='dolor2'>$75</div>
                                <div>
                                    <input className='inputDonate' placeholder='Custom Ammount' type='text' />
                                </div>
                            </div>
                            <div className='donerInfo'>
                                Donor Info
                    </div>
                        </Tab>
                    </div>
                    <div>
                        <Tab isSelected={this.state.selected === 'DONORINFOMATION'}>
                            <div id='inp'>
                                <div> <input  type='text' class="inp" placeholder="Title Mr's/Ms" /> </div>
                                <div> <input  type='text' class="inp" placeholder="First Name" /> </div>
                                <div> <input  type='text' class="inp" placeholder="Last Name" /> </div>
                            </div>
                            <div id='inp'>
                                <div> <input type='text' class="inp" placeholder="Componay Name" /> </div>
                                <div> <input type='text' class="inp" placeholder="Email Address" /> </div>
                                <div> <input type='text' class="inp" placeholder="Phone Number" /> </div>
                            </div>
                            <div id='inp'>
                                <div> <input type='text' class="inp" placeholder="Address" /> </div>
                                <div> <input type='text' class="inp" placeholder="EXT" /> </div>
                                <div> <input type='text' class="inp" placeholder="City " /> </div>
                            </div>
                            <div id='inp'>
                                <div> <input type='text' class="inp" placeholder="country" /> </div>
                                <div> <input type='text' class="inp" placeholder="Provincal State" /> </div>
                                <div> <input type='text' class="inp" placeholder="Postal code" /> </div>
                            </div>
                        </Tab>
                    </div>
                    <div>
                        <Tab isSelected={this.state.selected === 'PAYMENT'}>
                            <div className='payment'>
                                <div className='credit'>Creditn Card</div>
                                <div className='paypal'>paypal</div>
                                <div className='paypal'> Razorpay</div>
                                <div className='paypal'>Offline Donation</div>
                            </div>
                            <div className='visa'>
                                <img src={visa} />
                            </div>
                            <div id='inp'>
                                <div> <input class="inp" placeholder="Credit Card Number" /> </div>
                                <div> <input class="inp" placeholder="expiry Year & Month" /> </div>
                                <div> <input class="inp" placeholder="cvv  Code" /> </div>
                            </div>
                        </Tab>
                    </div>
                </TabNav>
            </div>
        );
    }
}
export default App;