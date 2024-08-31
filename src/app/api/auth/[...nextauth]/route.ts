import nextAuth from "next-auth";
import {othOptions} from '../../../../lib/authOptions'

const handler = nextAuth(othOptions)

export { handler as GET , handler as POST }
