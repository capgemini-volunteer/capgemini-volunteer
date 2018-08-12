
import React, { Fragment } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';

export class DashboardView extends React.Component {


  render() {
    return (
      <Fragment>
        <div className="dashboard-container">
          <div className="row">
            <div className="col-6">
            <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
            </div>
            <br />
            <br />
            <div className="col-6">
              <ListGroup>
                <ListGroupItem>
                  <ListGroupItemHeading> 
                    <div className="flex-center">
                    <i className="material-icons md-36 text-dark"> add_box</i> Create an opp
                    </div>
                    </ListGroupItemHeading>

                </ListGroupItem>

                <ListGroupItem>
                  <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                  <ListGroupItemText>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                  <ListGroupItemText>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                  <ListGroupItemText>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <ListGroup>
                <ListGroupItem>
                  <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                  <ListGroupItemText>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                  <ListGroupItemText>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem>
                  <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                  <ListGroupItemText>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
          </ListGroupItemText>
                </ListGroupItem>
              </ListGroup>
            </div>
          </div>
        </div>

        
      </Fragment>
    );
  }
}
