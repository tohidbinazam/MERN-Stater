import express from 'express';
import { getAllPhoto } from '../controllers/photoController.js';

const Router = express.Router();

Router.get('/', getAllPhoto);

export default Router;
