import Dashboard from 'pages/Dashboard';

const RoutedComponents = [{
    key: 0,
    title: 'Home',
    path: '/',
    isPublic: false,
    isPrivate: true,
    component: Dashboard,
},
{
    key:1,
    title: 'Home',
    path: '/dashboard',
    isPublic: false,
    isPrivate: true,
    component: Dashboard,
}];

export { RoutedComponents };
