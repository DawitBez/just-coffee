import Link from 'next/link'
import Image from 'next/image'

const RecipeCard = ({ recipe }) => {
  const { title, slug, cookingTime, thumbnail } = recipe.fields

  return (
    <div className='card'>
      <div className='featured'>
        <Image
          src={'https:' + thumbnail.fields.file.url}
          width={340}
          height={360}
          alt='/'
        />
      </div>
      <div className='content'>
        <div className='info'>
          <h4>{title}</h4>
          <p>Takes about {cookingTime} min</p>
        </div>
        <div className='actions'>
          <Link href={'/recipes/' + slug} legacyBehavior>
            <a>Make this</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .card {
          transform: rotateZ(-1deg);
        }
        .content {
          background: #fff;
          box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          margin: 0;
          position: relative;
          top: -40px;
          left: -10px;
        }
        .info {
          padding: 16px;
        }
        .info h4 {
          margin: 4px 0;
          text-transform: uppercase;
        }
        .info p {
          margin: 0;
          color: #777;
          font-size: 18px;
        }
        .actions {
          margin-top: 20px;
          display: flex;
          justify-content: flex-end;
        }
        .actions a {
          color: #fff;
          background: rgb(114, 71, 17);
          padding: 16px 24px;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}

export default RecipeCard
