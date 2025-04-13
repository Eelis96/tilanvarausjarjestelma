import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
})


export default function FrontPage() {
  return (
    <div className={montserrat.className}>
      <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      

      

        {/* Main + Footer Container */}
        <div className="flex-grow flex flex-col">
          {/* Main Content */}
          <main className="flex-grow p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">moikku</h2>
            <p>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae orci commodo, tempor nunc sit amet, consequat ex. Proin auctor tortor non risus faucibus, eu fermentum nunc aliquet. Suspendisse potenti. Donec imperdiet ac purus eu varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas quis est in massa faucibus fringilla. Proin odio nunc, efficitur nec mi eu, pulvinar ultrices turpis. Curabitur dolor ipsum, consectetur quis orci et, volutpat bibendum enim. Nunc egestas augue id augue venenatis, non ornare purus scelerisque.

  Sed viverra semper consequat. Curabitur ut nisl est. Mauris ac vulputate mauris. Nullam ex neque, accumsan ut tellus a, imperdiet finibus tortor. Nulla diam odio, rutrum sodales rutrum non, bibendum non mauris. Proin sem quam, hendrerit ut tellus id, ultrices rutrum tortor. Quisque in eleifend metus, vel hendrerit eros. Sed in vulputate ipsum. Pellentesque non turpis ante. Ut dignissim commodo eros id bibendum. Vestibulum nec tellus tortor. Donec nec luctus est, sit amet convallis lorem. Pellentesque commodo metus odio, nec tempor augue semper a. Aliquam eget lacus id risus ullamcorper scelerisque sed quis libero.

  Quisque at gravida justo. Aliquam ac euismod orci. Etiam semper ante ac nibh ultricies pellentesque. Nunc sed imperdiet diam. Praesent ornare libero at malesuada gravida. Donec a blandit dolor. Praesent a neque eget elit congue bibendum et sed ex.

  Fusce eget sapien sed ante vehicula varius. Morbi et placerat est. Donec faucibus nisi augue. Integer vehicula egestas varius. Quisque felis lectus, scelerisque quis consectetur finibus, tempus eget erat. Vivamus a viverra quam, id aliquet ex. Morbi aliquam nibh id libero blandit fermentum. Cras at sem ipsum. Fusce placerat augue ac lectus rutrum, sit amet volutpat diam posuere. Nullam non eros porttitor, cursus massa a, cursus nulla. Mauris consectetur magna arcu, nec tincidunt arcu semper molestie. Curabitur eget justo quis turpis venenatis rutrum. Etiam porttitor mollis arcu eget euismod.

  Etiam quis rhoncus mauris, quis varius lectus. Suspendisse eu lectus tristique, posuere arcu a, finibus diam. Vestibulum dictum et urna facilisis tincidunt. Cras sit amet augue odio. Sed ut bibendum ipsum. Ut id elementum enim, ac ultricies sem. Nam eu nibh at nisl dictum rhoncus ac et mi. In scelerisque sodales arcu, vitae consequat enim. Sed sit amet lacinia neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut id condimentum erat. </p>
          </main>

        </div>
      </div>
    </div>
  );
}
