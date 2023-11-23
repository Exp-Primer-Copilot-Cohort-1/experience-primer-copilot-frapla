// Create web server

// Import Express
const express = require('express');
// Import Mongoose
const mongoose = require('mongoose');
// Import path
const path = require('path');
// Import body-parser
const bodyParser = require('body-parser');
// Import express-handlebars
const exphbs = require('express-handlebars');
// Import method-override
const methodOverride = require('method-override');
// Import flash
const flash = require('connect-flash');
// Import session
const session = require('express-session');
// Import passport
const passport = require('passport');

// Initialize express