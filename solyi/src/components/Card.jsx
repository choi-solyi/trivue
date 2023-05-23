import { findProjectList } from '../plugins/firestore'
const Card = ({ type }) => {
  if (type === 'project') {
    findProjectList()
  }
  return (
    <div className="xl:mx-60 lg:mx-24 md:mx-16 sm:mx-6">
      <div className="p-4 mx-4 my-12 font-bold text-black bg-white border border-blue-700 rounded-lg hover:bg-blue-50">
        <div className="py-4">
          <div className="float-left text-3xl">asdfasdf</div>
          <div className="float-right text-2xl">2020.12.12~2021.10.14</div>
        </div>
        <div className="float-none my-10 text-md">
          <p className="my-4">
            An optimist is a person who sees a green light everywhere, while the
            pessimist sees only the red spotlight... The truly wise person is
            colour-blind. Great indeed is the sublimity of the Creative, to
            which all beings owe their beginning and which permeates all heaven.
            There are two kinds of failures: those who thought and never did,
            and those who did and never thought.
          </p>
          <p className="my-4">
            Let us resolve to be masters, not the victims, of our history,
            controlling our own destiny without giving way to blind suspicions
            and emotions. He is able who thinks he is able. Someone I know
            recently combined Maple Syrup & buttered Popcorn thinking it would
            taste like caramel popcorn. It didn’t and they don’t recommend
            anyone else do it either.
          </p>
        </div>
        <span className="p-1 mx-2 border border-gray-400 rounded-lg text-md">
          asdfasdf
        </span>
        <span className="p-1 mx-2 border border-gray-400 rounded-lg text-md">
          asdfasdf
        </span>
      </div>
    </div>
  )
}

export default Card
