<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title>All Memories</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-list>
            <ion-item>A trip into the mountains</ion-item>
            <ion-item>Surfing the sea side</ion-item>
            <ion-item>Good eating</ion-item>
            
        </ion-list>   
    </ion-content> 
</ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonList, IonItem, IonToolbar, IonTitle, IonContent } from "@ionic/vue"
export default{
    components:{
        IonPage, IonHeader, IonTitle, IonContent,IonToolbar, IonList, IonItem
    }
}


</script>
<style scoped>

</style>