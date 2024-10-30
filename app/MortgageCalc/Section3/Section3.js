import React from 'react'
import './Section3.css'

function Section3() {
  return (
    <div className='section-3'>
        <hr />
        <div className='section-3-contents'>
            <div className='text'>
            How does a mortgage calculator help me?
            </div>
            <div className='para'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
        <hr />
        <div className='section-3-contents'>

            <div className='text'>How much monthly mortgage payment can I afford?</div>
            <div className='para'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, <br />
            <br /> qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur
            </div>

            <div className='section-3-3'>
                <div className='para'>Formula for calculating your debt-to-income (DTI) ratio:</div>

                <div className='debt-to-income'>
                    <div className='debt-payments'>
                        <div className='mdp'>Monthly Debt Payments</div>
                        <div className='line'></div>
                        <div className='mdp'>Monthly Gross Income</div>
                    </div>
                    <div>X</div>
                    <div>100</div>
                    <div>=</div>
                    <div><strong>Debt-to-income Ratio</strong> </div>
                </div>

                <div className='para'>Here is an example of what calculating your DTI might look like:</div>
                
                <div className='dti'>
                    <div className='dti-1'>
                        <div className='dti-1-1'>
                            <div className='dti-text'>Income</div>
                            <div className='dti-1-1-container'>
                                <div className='dti-1-1-contents'>
                                    <span>
                                        Monthly salary <br /> $60000/12</span>
                                    <span>Monthly side-gig <br /> income</span>
                                </div>
                                <div className='dti-1-1-contents'>
                                    <span>$5000/month</span>
                                    <span>$1500/month</span>
                                </div>
                            </div>
                            <hr />
                            <div className='dti-text'>$6500 monthly Income</div>
                        </div>

                <div className='dti-1-1'>
                        <div className='dti-text'>Debts</div>
                        <div className='dti-1-1-container'>
                                <div className='dti-1-1-contents'>
                                    <span>Auto loan</span>
                                    <span>Student loans</span>
                                    <span>Credit cards</span>
                                    <span>Expected housing costs</span>
                                </div>
                                <div className='dti-1-1-contents'>
                                    <span>$350/month</span>
                                    <span>$220/month</span>
                                    <span>$130/month</span>
                                    <span>$1800/month</span>
                                </div>
                            </div>
                            <hr />
                            <div className='dti-text'>$3500 monthly debt obligations</div>
                </div>
                    </div>
                    <div className='debt-to-income-ratio'>
                    <div className='payments'>
                        <div className='mdp'>$2500</div>
                        <div className='line'></div>
                        <div className='mdp'>$6500</div>
                    </div>
                    <div>X</div>
                    <div>100</div>
                    <div>=</div>
                    <div><strong>Debt-to-income Ratio</strong> </div>
                </div>
                <div>
                    The above scenario is for illustrative purposes only
                </div>
                </div>
            </div>
        </div>
        <div>
        </div>
        <div className='section-3-contents'>
            <div className='text'>
            How to use this mortgage calculator?
            </div>
            <div className='para'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>

        <div className='section-3-contents'>
            <div className='text'>
            How is Better’s mortgage calculator different?
            </div>
            <div className='para'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
    </div>
  )
}

export default Section3