import { createRouter, createWebHistory } from 'vue-router'
import Authentification from '../views/Authentification.vue'
import Home from '../views/Home.vue'
import HowKey from '../views/HowKey.vue'
import AskContract from '../views/AskContract.vue'
import Validate from '../views/ValidateContract.vue'
import Activité from '../views/RapportActivité.vue'
import Proposer from '../views/ProposerContract.vue'
import GestionRh from '../views/GestionRh.vue'
import Modifier from '../views/ModifierContract.vue'
const routes = [
  {
    path: '/',
    name: 'Authentification',
    component: Authentification
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/HowCanIuseMyKey',
    name: 'HowKey',
    component: HowKey
  },
  {
    path: '/AskaNewContract',
    name: 'AskContract',
    component: AskContract
  },
  {
    path: '/ValidateContract',
    name: 'Validate',
    component: Validate
  },
  {
    path: '/RapportActivité',
    name: 'Activité',
    component: Activité
  },
  {
    path: '/ProposerContract',
    name: 'Proposer',
    component: Proposer
  },
  {
    path: '/GestionRh',
    name: 'GestionRh',
    component: GestionRh
  },
  {
    path: '/ModifierContract',
    name: 'Modifier',
    component: Modifier
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
