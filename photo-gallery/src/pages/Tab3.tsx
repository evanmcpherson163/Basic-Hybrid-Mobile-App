import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
// dataset state variable to hold JSON data from WP
const [dataset, setDataset] = useState([]);

// URL for WP JSON REST endpoint

const dataURL = "https://dev-headless-cms-powered-app.pantheonsite.io/wp-json/twentytwentyone-child/v1/shows";

// useEffect() to get JSON data to populate dataset state variable
useEffect(() => {
  fetch(dataURL) //fetch() to load raw JSON string
  .then(response => response.json()) //json () to convert raw string into json object
  .then(data => setDataset(data)) // react state set function to populate data state var
},[])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList id = "show-list">
          <IonListHeader>Shows</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines = "inset" key ={index}>
              <IonLabel>
                <h1>{item.post_title}</h1>
                <h3>{item.show_creator}</h3>
                <p>{item.release_date}</p>
                <p>{item.show_network}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

