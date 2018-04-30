import React, { Component } from 'react';

import { Grid, Card } from 'corvid-lib';

class HomeContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div>
          
          
          <Grid>
            <Grid.Half>
              <Card>
                This is half.<br/>
                More text.<br/>
                More text.<br/>
                More text.<br/>
                More text.
              </Card>
            </Grid.Half>
            <Grid.Half>
              <Card>
                This is half.
              </Card>
            </Grid.Half>

            <Grid.Quarter>
              <Card>
                This is quarter.
              </Card>
            </Grid.Quarter>
            <Grid.ThreeQuarters>
              <Card>
                This is half.<br/>
                More text.<br/>
                More text.<br/>
                More text.<br/>
                More text.
              </Card>
            </Grid.ThreeQuarters>

            <Grid.Third>
              <Card>
                This is third.
              </Card>
            </Grid.Third>
            <Grid.Third>
              <Card>
                This is third.<br/>
                More text.<br/>
                More text.
              </Card>
            </Grid.Third>
            <Grid.Third>
              <Card>
                This is third.
              </Card>
            </Grid.Third>

            <Grid.Third>
              <Card>
                This is third.<br/>
                More text.<br/>
                More text.<br/>
                More text.<br/>
                More text.
              </Card>
            </Grid.Third>
            <Grid.TwoThirds>
              <Card>
                This is two thirds.<br/>
                More text.<br/>
                More text.<br/>
                More text.<br/>
                More text.
              </Card>
            </Grid.TwoThirds>
          </Grid>



        </div>
      </div>
    );
  }

}

export default HomeContainer;
