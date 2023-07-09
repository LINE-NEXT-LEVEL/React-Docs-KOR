const sidebars = {
  docs :[
   {
    type: 'category',
    label: 'GET STARTED',
    items: [
     'learn/Quick Start/thinking-in-react',
      {
        type:'category',
        label:'Installation',
        items:[
          'learn/installation/start-a-new-react-project',
          'learn/installation/add-react-to-website',
          'learn/installation/editor-setup',
          'learn/installation/react-developer-tools'
        ]
      }
    ]
   }, {
    type:'category',
    label: 'LEARN REACT',
    items:[
      {
        type:'category',
        label:'Describing the UI',
        link:{
          type:'doc',
          id: 'learn/Describing the UI/describing-the-ui'
        },
        items: [
          'learn/Describing the UI/your-first-component',
          'learn/Describing the UI/javascript-in-jsx-with-curly-braces',
          'learn/Describing the UI/passing-props-to-a-component',
          'learn/Describing the UI/rendering-lists',
        ]
      },
      {
        type:'category',
        label:'Adding Interactivity',
        link:{
          type:'doc',
          id:'learn/Adding Interactivity/adding-interactivity',
        },
        items: [
          'learn/Adding Interactivity/responding-to-events',
          'learn/Adding Interactivity/state-a-components-memory',
          'learn/Adding Interactivity/render-and-commit',
          'learn/Adding Interactivity/state-as-a-snapshot',
          'learn/Adding Interactivity/queueing-a-series-of-state-updates',
          'learn/Adding Interactivity/updating-arrays-in-state',
        ]
      },
      {
        type:'category',
        label:'Managing State',
        link:{
          type:'doc',
          id:'learn/Managing State/managing-state'
        },
        items:[
          'learn/Managing State/reacting-to-input-with-state',
          'learn/Managing State/choosing-the-state-structure',
          'learn/Managing State/sharing-state-between-components',
          'learn/Managing State/extracting-state-logic-into-a-reducer',
          'learn/Managing State/passing-data-deeply-with-context',
          'learn/Managing State/scaling-up-with-reducer-and-context',
        ]
      },
      {
        type:'category',
        label:'Escape Hatches',
        link:{
          type:'doc',
          id: 'learn/Escape Hatches/escape-hatches'
        },
        items:[
          'learn/Escape Hatches/referencing-values-with-refs',
          'learn/Escape Hatches/manipulating-the-dom-with-refs',
          'learn/Escape Hatches/synchronizing-with-effects',
          'learn/Escape Hatches/you-might-not-need-an-effect',
          'learn/Escape Hatches/lifecycle-of-reactive-effects',
          'learn/Escape Hatches/seperating-events-from-effects',
          'learn/Escape Hatches/removing-effect-dependencies',
          'learn/Escape Hatches/reusing-logic-with-custom-hooks',
        ]
      }
    ]
   }
  ]
};

module.exports = sidebars;
