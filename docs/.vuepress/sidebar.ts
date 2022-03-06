export default [
    '/getting-started/',
    '/accordion/',
    '/alerts/',
    '/aspect/',
    '/badges/',
    '/breadcrumbs/',
    '/buttons/',
    '/buttons/groups/',
    '/buttons/toolbars/',
    '/cards/',
    '/carousel/',
    '/close-button/',
    '/collapse/',
    '/calendar/',
    '/dropdowns/',
    {
        text: 'Form',
        link: '/form/',
        collapsible: true,
        children: [
            "/form/checkbox",
            "/form/input",
            "/form/radio/",
            "/form/rating/",
            "/form/select/",
            "/form/group/",
            "/form/spinbutton/",
            "/form/tags/",
        ].sort()
    },
    '/list-group/',
    '/modals/',
    '/navs-and-tabs/',
    '/navbar/',
    '/offcanvas/',
    '/pagination/',
    '/popover/',
    '/progress/',
    '/spinner/',
    '/stack/',
    '/toasts/',
    '/tooltip/',
    {
        text:'Layout',
        collapsible: true,
        children: [
            '/layout/',
            "/layout/grid/",
            "/layout/columns/",
            "/layout/gutters/",
        ]
    },
    {
        text:'Content',
        collapsible: true,
        children: [
           "/content/table/"
        ]
    },

]