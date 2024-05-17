import { useState } from "react";
import orderImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category)
  const [menu] = useMenu();
  const [tabIndex, setTabIndex] = useState(initialIndex);
  console.log(category);

  const desserts = menu.filter((ltem) => ltem.category === "dessert");
  const soup = menu.filter((ltem) => ltem.category === "soup");
  const salad = menu.filter((ltem) => ltem.category === "salad");
  const pizza = menu.filter((ltem) => ltem.category === "pizza");
  const drinks = menu.filter((ltem) => ltem.category === "drinks");

  return (
    <div>
      <Helmet>
                <title>
                    Bistro Boss | Order Food
                </title>
            </Helmet>
      <Cover img={orderImg} title="Order Food"></Cover>
      <div className="mt-10 mb-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="flex items-center justify-center mb-10">
            <TabList>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soup</Tab>
              <Tab>Dessert</Tab>
              <Tab>Drinks</Tab>
            </TabList>
          </div>

          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>

          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>

          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>

          <TabPanel>
            <OrderTab items={desserts}></OrderTab>
          </TabPanel>

          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
