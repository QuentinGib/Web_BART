import { createRouter, createWebHistory } from 'vue-router'
import Authentification from '../views/Authentification.vue'
import Home from '../views/Home.vue'
import HowKey from '../views/HowKey.vue'
import AskContract from '../views/Client/AskContract.vue'
import Validate from '../views/ValidateContract.vue'
import Activite from '../views/Ressource/RapportActivite.vue'
import Proposer from '../views/Entreprise/ProposerContract.vue'
import GestionRh from '../views/Entreprise/GestionRh.vue'
import Modifier from '../views/Entreprise/ModifierContract.vue'
import Contract from '../views/Entreprise/PageContract.vue'
import Spinner from '../components/spinner.vue'
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
    path: '/RapportActivite',
    name: 'Activite',
    component: Activite
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
    path: '/ModifierContract/:slug',
    name: 'Modifier',
    component: Modifier
  },
  {
    path: '/Spinner',
    name: 'spin',
    component: Spinner
  },
  {
    path: '/PageContract/:slug',
    name: 'PageContract',
    component: Contract
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
