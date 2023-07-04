import { createRouter,createWebHistory } from "vue-router";
import homePage from '../pages/homePage';
import loginPage from '../pages/loginPage';
import signupPage from '../pages/signupPage';
import jobsPage from '../pages/jobsPage';
import universitiesPage from '../pages/universitiesPage';
import jobPage from '../pages/jobPage';
import signupSeeker from '../pages/seeker/signupSeeker';
import signupIndustry from '../pages/industry/signupIndustry';
import signupInstitution from '../pages/institution/signupInstitution';
import dashboardPageSeeker from '../pages/seeker/dashboardPage';
import profilePageSeeker from '../pages/seeker/profilePage';
import educationPageSeeker from '../pages/seeker/educationPage';
import expiriencePageSeeker from '../pages/seeker/expiriencePage';
import referencePageSeeker from '../pages/seeker/referencePage';
import resumePageSeeker from '../pages/seeker/resumePage';
import jobPageSeeker from '../pages/seeker/jobPage';
import opportunitiesPageSeeker from '../pages/seeker/opportunitiesPage';
import applicationsPageSeeker from '../pages/seeker/applicationsPage';
import applicationPageSeeker from '../pages/seeker/applicationPage';
import interestPageSeeker from '../pages/seeker/interestPage';
const routes = [
    {
        name: 'Home',
        path:'/',
        component: homePage
    },
    {
        name: 'LoginPage',
        path:'/login',
        component: loginPage
    },
    {
        name: 'JobsPage',
        path:'/opportunities',
        component: jobsPage
    },
    {
        name: 'UniversitiesPage',
        path:'/universities',
        component: universitiesPage
    },
    {
        name: 'JobPage',
        path:'/opportunity/:id',
        component: jobPage,
        props:true
    },
    {
        name: 'SignUp',
        path:'/signup',
        component: signupPage
    },
    {
        name: 'SignupSeeker',
        path:'/signup/seeker',
        component: signupSeeker
    },
    {
        name: 'SignupIndustry',
        path:'/signup/industry',
        component: signupIndustry
    },
    {
        name: 'SignupInstitution',
        path:'/signup/institution',
        component: signupInstitution
    },
    {
        name: 'DashboardPage',
        path:'/seeker/dashboard',
        component: dashboardPageSeeker
    },
    {
        name: 'ProfilePage',
        path:'/seeker/profile',
        component: profilePageSeeker
    },
    {
        name: 'EducationPage',
        path:'/seeker/profile/education',
        component: educationPageSeeker
    },
    {
        name: 'ExpiriencePage',
        path:'/seeker/profile/expirience',
        component: expiriencePageSeeker
    },
    {
        name: 'ReferencePage',
        path:'/seeker/profile/Reference',
        component: referencePageSeeker
    },
    {
        name: 'ResumePage',
        path:'/seeker/resume',
        component: resumePageSeeker
    },
    {
        name: 'opportunitiesPageSeeker',
        path:'/seeker/opportunities',
        component: opportunitiesPageSeeker,
        props: true
    },
    {
        name: 'JobPageSeeker',
        path:'/seeker/opportunity/:id',
        component: jobPageSeeker,
        props: true
    },
    {
        name: 'ApplicationsSeeker',
        path:'/seeker/applications',
        component: applicationsPageSeeker,
    },
    {
        name: 'ApplicationSeeker',
        path:'/seeker/application/:id',
        component: applicationPageSeeker,
        props:true
    },
    {
        name: 'InterestSeeker',
        path:'/seeker/interest',
        component: interestPageSeeker
    }
];

const router = Router();
export default router;
function Router(){
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}