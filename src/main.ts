import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import ApolloClient from "apollo-boost"
import {DefaultApolloClient} from "@vue/apollo-composable";


createApp(App).provide(DefaultApolloClient, ApolloClient).mount('#app')
