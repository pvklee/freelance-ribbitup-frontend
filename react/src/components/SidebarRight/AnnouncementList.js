import React,{memo} from "react";
import {isEqual} from "lodash";
import {List, Input} from 'semantic-ui-react';
import "../../styles/Announcement.css";

const SidebarRightList = memo((props) => {
    return (
      <div className="announcement">
      <List>
      <List.Item>
        <List.Icon className={"icon s7-sun"} />
        <List.Content>
          <List.Header as='a'>Krowlewskie Jadlo</List.Header>
          <List.Description>
            An excellent polish restaurant, quick delivery and hearty, filling meals.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon className={"icon s7-sun"} />
        <List.Content>
          <List.Header as='a'>Krowlewskie Jadlo</List.Header>
          <List.Description>
            An excellent polish restaurant, quick delivery and hearty, filling meals.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon className={"icon s7-sun"} />
        <List.Content>
          <List.Header as='a'>Krowlewskie Jadlo</List.Header>
          <List.Description>
            An excellent polish restaurant, quick delivery and hearty, filling meals.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon className={"icon s7-sun"} />
        <List.Content>
          <List.Header as='a'>Krowlewskie Jadlo</List.Header>
          <List.Description>
            An excellent polish restaurant, quick delivery and hearty, filling meals.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon className={"icon s7-sun"} />
        <List.Content>
          <List.Header as='a'>Krowlewskie Jadlo</List.Header>
          <List.Description>
            An excellent polish restaurant, quick delivery and hearty, filling meals.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon className={"icon s7-gift"} />
        <List.Content>
          <List.Header as='a'>Xian Famous Foods</List.Header>
          <List.Description>
            A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles
            and lamb burgers.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon className={"icon s7-gift"} />
        <List.Content>
          <List.Header as='a'>Xian Famous Foods</List.Header>
          <List.Description>
            A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles
            and lamb burgers.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon className={"icon s7-gift"} />
        <List.Content>
          <List.Header as='a'>Xian Famous Foods</List.Header>
          <List.Description>
            A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles
            and lamb burgers.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon className={"icon s7-gift"} />
        <List.Content>
          <List.Header as='a'>Xian Famous Foods</List.Header>
          <List.Description>
            A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles
            and lamb burgers.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon className={"icon s7-gift"} />
        <List.Content>
          <List.Header as='a'>Xian Famous Foods</List.Header>
          <List.Description>
            A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles
            and lamb burgers.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon className={"icon s7-gift"} />
        <List.Content>
          <List.Header as='a'>Xian Famous Foods</List.Header>
          <List.Description>
            A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles
            and lamb burgers.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon className={"icon s7-gift"} />
        <List.Content>
          <List.Header as='a'>Xian Famous Foods</List.Header>
          <List.Description>
            A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles
            and lamb burgers.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon className={"icon s7-gift"} />
        <List.Content>
          <List.Header as='a'>Xian Famous Foods</List.Header>
          <List.Description>
            A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles
            and lamb burgers.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon className={"icon s7-gift"} />
        <List.Content>
          <List.Header as='a'>Xian Famous Foods</List.Header>
          <List.Description>
            A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles
            and lamb burgers.
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon className={"icon s7-gift"} />
        <List.Content>
          <List.Header as='a'>Xian Famous Foods</List.Header>
          <List.Description>
            A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles
            and lamb burgers.
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
    </div>
    )
},equalityCheck)

function equalityCheck(prevProps, nextProps) {
  return isEqual(prevProps, nextProps)
} 
export default SidebarRightList;