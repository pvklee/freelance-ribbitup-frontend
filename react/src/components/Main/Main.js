import React, {memo} from 'react';
import {isEqual} from "lodash";
import "../../styles/Main.css";
import {Card, Grid} from 'semantic-ui-react'

const Main = memo(() => {
    const description = [];
return (
    <div className="main">
        <Grid stackable columns={3}>
            <Grid.Row>
            <Grid.Column>
                <Card>
                    <Card.Content header='Top Sales' />
                    <Card.Content description={description} />
                    <Card.Content extra>
                         <Grid columns={3}>
                             <Grid.Column>
                                 <div className="p-left">
                                    <p>New Clients</p>
                                    <p>0</p>
                                 </div>  
                             </Grid.Column>
                             <Grid.Column>
                                <div className="p-middle">
                                    <p>Total Sales</p>
                                    <p>$0</p>
                                </div> 
                             </Grid.Column>
                             <Grid.Column>
                                 <div className="p-right">
                                    <p>Refunds</p>
                                    <p>0</p>
                                 </div> 
                             </Grid.Column>
                         </Grid>
                    </Card.Content>
                </Card>

            </Grid.Column>
            <Grid.Column>
            <Card>
                    <Card.Content header='Monthly Visits' />
                    <Card.Content description={description} />
                    <Card.Content extra>
                         <Grid columns={3}>
                             <Grid.Column>
                                 <div className="p-left">
                                    <p>New Visitors</p>
                                    <p>0%</p>
                                 </div>  
                             </Grid.Column>
                             <Grid.Column>
                                <div className="p-middle">
                                    <p>Conversion</p>
                                    <p>0</p>
                                </div> 
                             </Grid.Column>
                             <Grid.Column>
                                 <div className="p-right">
                                    <p>Bounce Rate</p>
                                    <p>%0</p>
                                 </div> 
                             </Grid.Column>
                         </Grid>
                    </Card.Content>
                </Card>

            </Grid.Column>
            <Grid.Column>
                
            <Card>
                    <Card.Content header="Advertisement" />
                    <Card.Content description={description} />
                    <Card.Content extra>
                         <Grid columns={2}>
                             <Grid.Column>
                                 <div className="p-left">
                                    <p>Profit</p>
                                    <p>0</p>
                                 </div>  
                             </Grid.Column>
                             <Grid.Column>
                                 <div className="p-right">
                                    <p>Return</p>
                                    <p>0</p>
                                 </div> 
                             </Grid.Column>
                         </Grid>
                    </Card.Content>
                </Card>
            </Grid.Column>
            </Grid.Row> 
        </Grid>
      </div>
    );
}, equalityCheck)
function equalityCheck(prevProps, nextProps) {
    return isEqual(prevProps, nextProps)
  } 

export default Main;