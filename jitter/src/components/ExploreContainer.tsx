import React from 'react';
import './ExploreContainer.css';
import { IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonContent, IonCard, IonIcon, IonLabel, IonButton, IonImg  } from '@ionic/react';
import { pin } from 'ionicons/icons';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonImg src={'assets/Shopify.png'}/>
            <div>
              <IonCardTitle>Shopify</IonCardTitle>
              <IonCardSubtitle>Product Designer</IonCardSubtitle>
            </div>
            
          </IonCardHeader>

          <IonCardContent>
          
           {/*  <IonIcon icon={pin} slot="start" />
            <IonButton fill="outline" slot="end">View</IonButton> */}
            <IonLabel>Experience: 3yrs<br/>Location: Dublin<br/>Open to Remote: yes </IonLabel>
            
             
            
          </IonCardContent>
        </IonCard>
      </IonContent>
    
  );
};

export default ExploreContainer;
