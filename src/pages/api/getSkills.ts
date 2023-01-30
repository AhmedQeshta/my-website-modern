// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ApiSkillsInterFace } from '@/interfaces';
import { graphQLClient } from '@/utils';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiSkillsInterFace>,
) {
  const data = await graphQLClient.request(
    `query Skills {
      skills(last: 20) {
        id
        title
        progress
        image{
          url
        }
        directionLeft
      }
    }`,
  );

  res.status(200).json(data);
}
