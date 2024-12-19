import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
// dataset state variable to hold JSON data from WP
const [dataset, setDataset] = useState([]);

// URL for WP JSON REST endpoint

const dataURL = "https://dev-headless-cms-powered-app.pantheonsite.io/wp-json/twentytwentyone-child/v1/movies";

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
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList id = "movie-list">
          <IonListHeader>Movies</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines = "inset" key ={index}>
              <IonLabel>
                <h3>{item.post_title}</h3>
                <p>{item.movie_director}</p>
                <p>{item.release_date}</p>
                <img src = {item.guid}></img>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
