import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    // setHeader('Cache-Control', 's-maxage=86400')
    const prompts = await Prompt.find({}).populate('creator');
    return new Response(JSON.stringify(prompts), {status: 200} );
  
    // return res.status(200).json(prompts);
  } catch (error) {

    return new Response(JSON.stringify('Failed to fetch all prompts'), {status: 500});

  }
}