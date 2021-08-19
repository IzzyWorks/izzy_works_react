import React from 'react';

//components
import Image from '../article/Image';
import Summary from '../article/Summary';
import Title from '../article/Title';
import Details from '../article/Details';
import Hero from '../article/Hero';

//data
import articleData from '../data/articleData';

function Tldnr() {
  return (
    <article key={articleData.id} className='article--wrapper slide-in'>
      <Title articleTitle={articleData} />
      <Details
        articleDetails={articleData}
        // articleDuration={articleData.publication.length}
        // articleTools={articleData.publication.tools}
      />
      <Hero articleHero={articleData} />
      <Summary articleSummary={articleData} />
      <Image articleImage={articleData} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Fringilla ut morbi
        tincidunt augue interdum velit euismod. Egestas maecenas pharetra
        convallis posuere. Vitae suscipit tellus mauris a diam maecenas. Morbi
        tincidunt augue interdum velit euismod in pellentesque. Volutpat est
        velit egestas dui. Quam elementum pulvinar etiam non quam lacus
        suspendisse. Eleifend quam adipiscing vitae proin sagittis. Elit
        pellentesque habitant morbi tristique senectus. Aliquam ut porttitor leo
        a diam sollicitudin tempor. Cras adipiscing enim eu turpis egestas
        pretium. Feugiat vivamus at augue eget arcu dictum. Massa id neque
        aliquam vestibulum. Pretium viverra suspendisse potenti nullam ac. Quis
        blandit turpis cursus in hac habitasse platea dictumst quisque. Massa
        massa ultricies mi quis hendrerit dolor magna. Rutrum quisque non tellus
        orci. At risus viverra adipiscing at in tellus integer feugiat
        scelerisque. Lectus urna duis convallis convallis. Feugiat vivamus at
        augue eget arcu dictum. Ut lectus arcu bibendum at varius vel pharetra
        vel turpis. Non consectetur a erat nam. Et netus et malesuada fames ac
        turpis egestas maecenas. Ornare arcu dui vivamus arcu felis bibendum ut.
        Tellus integer feugiat scelerisque varius. Mi quis hendrerit dolor
        magna. Quis vel eros donec ac odio tempor orci. Donec ultrices tincidunt
        arcu non sodales neque. Velit aliquet sagittis id consectetur purus ut
        faucibus pulvinar. Auctor elit sed vulputate mi sit amet mauris commodo.
        Porttitor lacus luctus accumsan tortor. Sit amet tellus cras adipiscing
        enim eu turpis egestas pretium. Convallis a cras semper auctor neque.
        Pellentesque pulvinar pellentesque habitant morbi tristique senectus et
        netus et. Tempor nec feugiat nisl pretium fusce id. Vel pharetra vel
        turpis nunc eget. Suscipit adipiscing bibendum est ultricies. Neque
        convallis a cras semper. Rhoncus dolor purus non enim praesent elementum
        facilisis leo vel. Mattis rhoncus urna neque viverra justo nec ultrices
        dui. Mi proin sed libero enim sed. Amet venenatis urna cursus eget nunc
        scelerisque viverra mauris in. Sem nulla pharetra diam sit amet. Odio
        morbi quis commodo odio aenean sed adipiscing diam donec. Eget nunc
        lobortis mattis aliquam faucibus purus in massa. Purus viverra accumsan
        in nisl nisi scelerisque eu ultrices. Nunc lobortis mattis aliquam
        faucibus purus in massa. Sem fringilla ut morbi tincidunt augue interdum
        velit. Egestas congue quisque egestas diam in arcu. Vestibulum lectus
        mauris ultrices eros in cursus turpis. Ante in nibh mauris cursus mattis
        molestie. Tellus in metus vulputate eu scelerisque felis. Felis donec et
        odio pellentesque diam volutpat. Eu scelerisque felis imperdiet proin
        fermentum. Velit laoreet id donec ultrices tincidunt arcu non sodales.
        Pellentesque dignissim enim sit amet venenatis. Etiam erat velit
        scelerisque in dictum non consectetur a erat. In cursus turpis massa
        tincidunt dui ut. Volutpat commodo sed egestas egestas fringilla
        phasellus faucibus scelerisque eleifend. Consectetur libero id faucibus
        nisl tincidunt eget. Tincidunt id aliquet risus feugiat in ante metus
        dictum at. Enim diam vulputate ut pharetra sit amet aliquam. Magnis dis
        parturient montes nascetur ridiculus mus. Risus in hendrerit gravida
        rutrum quisque non tellus orci. Enim lobortis scelerisque fermentum dui
        faucibus in. Nascetur ridiculus mus mauris vitae ultricies. Quis commodo
        odio aenean sed adipiscing. Sociis natoque penatibus et magnis dis
        parturient montes nascetur ridiculus. Morbi blandit cursus risus at
        ultrices mi tempus imperdiet nulla. At imperdiet dui accumsan sit amet
        nulla facilisi morbi. Quam pellentesque nec nam aliquam sem et. Nisi est
        sit amet facilisis magna etiam tempor orci. Euismod elementum nisi quis
        eleifend quam adipiscing vitae proin sagittis. Diam vulputate ut
        pharetra sit. Tellus integer feugiat scelerisque varius morbi enim.
        Tortor at risus viverra adipiscing at in tellus. Massa placerat duis
        ultricies lacus. Euismod lacinia at quis risus sed. Morbi tristique
        senectus et netus et malesuada fames. Malesuada fames ac turpis egestas
        sed tempus urna et. Ultricies mi eget mauris pharetra et ultrices neque.
        Proin gravida hendrerit lectus a. Vulputate dignissim suspendisse in est
        ante in. Eget nunc scelerisque viverra mauris in aliquam sem fringilla.
        Aliquam purus sit amet luctus venenatis lectus magna. Sed arcu non odio
        euismod lacinia at quis. Sem et tortor consequat id porta nibh
        venenatis. Ut tristique et egestas quis ipsum suspendisse ultrices. Odio
        euismod lacinia at quis risus. Sit amet consectetur adipiscing elit ut
        aliquam purus. Porta nibh venenatis cras sed. Auctor augue mauris augue
        neque gravida in fermentum. Fermentum odio eu feugiat pretium nibh ipsum
        consequat nisl vel. Arcu odio ut sem nulla pharetra. Vitae tortor
        condimentum lacinia quis vel eros donec. Et malesuada fames ac turpis.
        Eu lobortis elementum nibh tellus molestie. Volutpat ac tincidunt vitae
        semper quis. Eleifend donec pretium vulputate sapien. Pulvinar sapien et
        ligula ullamcorper malesuada proin libero nunc. Aliquam purus sit amet
        luctus venenatis lectus magna fringilla urna. Euismod quis viverra nibh
        cras pulvinar. Ut tellus elementum sagittis vitae et. Dignissim cras
        tincidunt lobortis feugiat vivamus. Posuere morbi leo urna molestie at
        elementum eu facilisis. Eget nunc scelerisque viverra mauris in aliquam
        sem fringilla. Quis varius quam quisque id diam vel. Interdum posuere
        lorem ipsum dolor sit amet. Posuere urna nec tincidunt praesent semper
        feugiat nibh sed pulvinar. Vitae ultricies leo integer malesuada nunc
        vel risus commodo. Feugiat scelerisque varius morbi enim nunc. Amet
        consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.
        At quis risus sed vulputate odio ut enim blandit volutpat. Id interdum
        velit laoreet id donec ultrices tincidunt arcu. Nisl nisi scelerisque eu
        ultrices vitae auctor eu augue. Nulla facilisi morbi tempus iaculis urna
        id volutpat. Felis eget nunc lobortis mattis aliquam faucibus. Quis vel
        eros donec ac odio tempor. Consequat semper viverra nam libero. Viverra
        suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Justo
        nec ultrices dui sapien eget. Egestas sed sed risus pretium quam
        vulputate dignissim suspendisse in. Rhoncus dolor purus non enim. Tempor
        orci eu lobortis elementum nibh tellus molestie nunc non. Egestas purus
        viverra accumsan in nisl nisi scelerisque eu. Fermentum dui faucibus in
        ornare quam viverra orci sagittis eu. Mi tempus imperdiet nulla
        malesuada pellentesque elit eget gravida cum. Lacus vel facilisis
        volutpat est velit egestas dui id ornare. Ipsum nunc aliquet bibendum
        enim facilisis gravida neque convallis a. In eu mi bibendum neque.
        Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Posuere
        sollicitudin aliquam ultrices sagittis. Ultrices gravida dictum fusce ut
        placerat orci. Odio euismod lacinia at quis risus sed vulputate. Lacus
        suspendisse faucibus interdum posuere. At in tellus integer feugiat
        scelerisque varius morbi. Nunc mattis enim ut tellus elementum sagittis
        vitae et. Laoreet id donec ultrices tincidunt arcu non. Facilisis magna
        etiam tempor orci eu lobortis elementum nibh tellus. Viverra adipiscing
        at in tellus integer feugiat scelerisque varius morbi. Massa id neque
        aliquam vestibulum morbi blandit cursus risus at. Eget egestas purus
        viverra accumsan in. Congue nisi vitae suscipit tellus mauris a diam.
        Neque vitae tempus quam pellentesque nec nam aliquam sem. Nunc id cursus
        metus aliquam eleifend mi in nulla posuere. Molestie at elementum eu
        facilisis sed. Tempor orci eu lobortis elementum nibh tellus. Odio
        tempor orci dapibus ultrices in iaculis. Purus viverra accumsan in nisl
        nisi scelerisque. Sed risus ultricies tristique nulla. Est ultricies
        integer quis auctor. Interdum posuere lorem ipsum dolor sit amet
        consectetur.
      </p>
    </article>
  );
}

export default Tldnr;
