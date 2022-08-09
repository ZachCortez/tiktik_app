import type { NextApiRequest, NextApiResponse } from 'next'
import { postDetailQuery } from '../../../utils/queries';

    export default async function handler( req: NextApiRequest,
    res: NextApiResponse) {
    if(req.method === 'GET') {
        const { id } = req.query;
        const query = postDetailQuery(id);
    }
}