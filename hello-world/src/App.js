
import { 
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToast,
  IonToolbar
} from "@ionic/react";
import { play as iconePlay } from "ionicons/icons";
import React, { useState } from 'react';

function App() {
  const [mostrarMsg, setMostrarMsg] = useState(false);
  const tratarClick = ()=>{
    setMostrarMsg(true);
    setTimeout(() => setMostrarMsg(false), 1500);
  };

  return (
    <IonApp>
      <IonHeader>
        <IonHeader>
          <IonToolbar>
            <IonTitle>My App</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton onClick={tratarClick}>
          <IonIcon icon={iconePlay} slot="start" />
          Me clica
        </IonButton>
        <IonToast isOpen={mostrarMsg} message="Hellow World!" />
      </IonContent>
    </IonApp>
  );
}

export default App;
