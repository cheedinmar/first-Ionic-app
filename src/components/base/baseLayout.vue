<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title>All Memories</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <slot></slot> 
    </ion-content> 
</ion-page>
</template>
<script lang="ts">
import { IonPage, IonHeader,   IonToolbar, IonTitle, IonContent } from "@ionic/vue"
export default {
    components: {
        IonPage, IonHeader, IonTitle, IonContent, IonToolbar
    }
}

</script>