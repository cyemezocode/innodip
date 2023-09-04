import { createRouter,createWebHistory } from "vue-router";
import homePage from '../pages/homePage';
import handleForm from '../pages/handleForm';
// import comingSoon from '../pages/comingSoon';
import loginPage from '../pages/loginPage';
import resetPage from '../pages/resetPage';
import confirmAccount from '../pages/confirmAccount';
import signupPage from '../pages/signupPage';
import jobsPage from '../pages/jobsPage';
import universitiesPage from '../pages/universitiesPage';
import universityPage from '../pages/universityPage';
import industriesPage from '../pages/industriesPage';
import industryPage from '../pages/industryPage';
import researchPage from '../pages/researchPage';
import curriculumPage from '../pages/curriculumPage';
import publicationPage from '../pages/publicationPage';
import curriculumQuestionaire from '../pages/curriculumQuestionaire';
import consultancyPage from '../pages/consultancyPage';
import jobFiltered from '../pages/JobFiltered';
import trainingPage from '../pages/trainingPage';
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
import universitiesPageSeeker from '../pages/seeker/universitiesPage';
import industriesPageSeeker from '../pages/seeker/industriesPage';
import universityPageSeeker from '../pages/seeker/universityPage';
import industryPageSeeker from '../pages/seeker/industryPage';

import dashboardPageInstitution from '../pages/institution/dashboardPage';
import employeesPageInstitution from '../pages/institution/employeesPage';
import opportunitiesPageInstitution from '../pages/institution/opportunitiesPage';
import opportunityAddInstitution from '../pages/institution/addOpportunity';
import profilePageInstitution from '../pages/institution/profilePage';

import dashboardPageIndustry from '../pages/industry/dashboardPage';
import opportunitiesIndustry from '../pages/industry/opportunitiesPage';
import opportunityAddIndustry from '../pages/industry/addOpportunity';
import profilePageIndustry from '../pages/industry/profilePage';


// admin
import homePageAdmin from '../pages/admin/homePage';
import categoriesPage from '../pages/admin/categoriesPage';


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
        name: 'ResetPage',
        path:'/reset',
        component: resetPage
    },
    {
        name: 'ConfirmAccount',
        path:'/confirm',
        component: confirmAccount
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
        name: 'UniversityPage',
        path:'/university/:id',
        component: universityPage,
        props:true
    },
    {
        name: 'industryPage',
        path:'/industry/:id',
        component: industryPage,
        props:true
    },
    {
        name: 'ResearchPage',
        path:'/research',
        component: researchPage
    },
    {
        name: 'CurriculumPage',
        path:'/curriculum',
        component: curriculumPage
    },
    {
        name: 'PublicationPage',
        path:'/publication',
        component: publicationPage
    },
    {
        name: 'IndustriesPage',
        path:'/industries',
        component: industriesPage
    },
    {
        name: 'HandleForm',
        path:'/handelform',
        component: handleForm
    },
    {
        name: 'CurriculumQuestionaire',
        path:'/curriculumQuestionaire',
        component: curriculumQuestionaire
    },
    {
        name: 'ConsultancyPage',
        path:'/consultancy',
        component: consultancyPage
    },
    {
        name: 'jobFilterd',
        path:'/jobs',
        component: jobFiltered
    },
    {
        name: 'TrainingPage',
        path:'/internship',
        component: trainingPage
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
        name: 'HSeekerDashboardPage',
        path:'/seeker/',
        component: dashboardPageSeeker
    },
    {
        name: 'SeekerDashboardPage',
        path:'/seeker/dashboard',
        component: dashboardPageSeeker
    },
    {
        name: 'ProfilePage',
        path:'/seeker/profile',
        component: profilePageSeeker
    },
    {
        name: 'ProfilePageIndus',
        path:'/industry/profile',
        component: profilePageIndustry
    },
    {
        name: 'EducationPage',
        path:'/seeker/profile/education',
        component: educationPageSeeker
    },
    {
        name: 'ExpiriencePage',
        path:'/seeker/profile/experience',
        component: expiriencePageSeeker
    },
    {
        name: 'ReferencePage',
        path:'/seeker/profile/certificate',
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
    },
    {
        name: 'UniversitiesSeeker',
        path:'/seeker/universities',
        component: universitiesPageSeeker
    },
    {
        name: 'UniversitySeeker',
        path:'/seeker/university/:id',
        component: universityPageSeeker,
        props:true
    },
    {
        name: 'IndustriesSeeker',
        path:'/seeker/industries',
        component: industriesPageSeeker
    },
    {
        name: 'industrySeeker',
        path:'/seeker/industry/:id',
        component: industryPageSeeker,
        props:true
    },

    // admin

    
    {
        name: 'AdminHomePage',
        path:'/admin/',
        component: homePageAdmin
    },
    {
        name: 'CategoriesPage',
        path:'/admin/categories',
        component: categoriesPage
    },
    {
        name: 'EmployeesPage',
        path:'/institution/employees',
        component: employeesPageInstitution
    },
    {
        name: 'OpportunitiesPage',
        path:'/institution/opportunities',
        component: opportunitiesPageInstitution
    },
    {
        name: 'OpportunityAdd',
        path:'/institution/opportunity/add',
        component: opportunityAddInstitution
    },

    
    // institution

    
    {
        name: 'HomeDashboardPage',
        path:'/institution/',
        component: dashboardPageInstitution
    },
    {
        name: 'DashboardPage',
        path:'/institution/dashboard',
        component: dashboardPageInstitution
    },
    {
        name: 'EmployeesPage',
        path:'/institution/employees',
        component: employeesPageInstitution
    },

    
    {
        name: 'InduDashboardPage',
        path:'/industry/',
        component: dashboardPageIndustry
    },
    {
        name: 'OpportunitiesPageInd',
        path:'/industry/opportunities',
        component: opportunitiesIndustry
    },
    {
        name: 'OpportunityAddInd',
        path:'/industry/opportunity/add',
        component: opportunityAddIndustry
    },
    {
        name: 'ProfilePageInst',
        path:'/institution/profile',
        component: profilePageInstitution
    },
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