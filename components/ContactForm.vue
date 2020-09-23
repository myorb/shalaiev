<template>
  <section class="py-12 px-4">
    <h2 class="text-3xl mb-8 text-center font-heading" data-config-id="header">
      Contact the Scranton team
    </h2>
    <div class="w-full max-w-2xl mx-auto mb-8">
      <form _lpchecked="1">
        <div class="flex mb-4 -mx-2">
          <div class="w-1/2 px-2">
            <input class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="email" placeholder="Name">
          </div>
          <div class="w-1/2 px-2">
            <input class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="email" placeholder="Email">
          </div>
        </div>
        <div class="mb-4">
          <textarea class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" placeholder="Write something..." rows="5" />
        </div>
        <div>
          <button class="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" data-config-id="primary-action">
            Submit
          </button>
        </div>
      </form>
    </div>
    <div class="text-center">
      <p class="mb-2" data-config-id="contact">
        Or just email us on
      </p>
      <a class="text-blue-700 hover:underline" href="#" data-config-id="email">scranton@dundermifflin.com</a>
    </div>
  </section>
</template>
