<?php

return [
    'baseUrl' => 'https://v-docs.herokuapp.com',
    'production' => true,

    // DocSearch credentials
    'docsearchApiKey' => env('DOCSEARCH_KEY'),
    'docsearchIndexName' => env('DOCSEARCH_INDEX'),
];
