import Vue from 'vue';

const eventBus: Vue = new Vue();

window['EventBus'] = eventBus;

export const EventBus = eventBus;
