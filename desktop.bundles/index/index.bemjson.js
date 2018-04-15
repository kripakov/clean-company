module.exports = {
  block: 'page',
  title: 'Title of the page',
  favicon: '/favicon.ico',
  head: [{
    elem: 'meta',
    attrs: {
      name: 'description',
      content: ''
    }
  }, {
    elem: 'meta',
    attrs: {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }
  }, {
    elem: 'css',
    url: 'index.min.css'
  }, {
    elem: 'css',
    url: '../../libs/bxslider/jquery.bxslider.css'
  }, {
    elem: 'css',
    url: '../../libs/fancybox-master/dist/jquery.fancybox.css'
  }, {
    elem: 'css',
    url: '../../libs/fullPage.js/jquery.fullPage.css'
  }, {
    elem: 'css',
    url: '../../libs/bxslider/jquery.bxslider.css'
  }, {
    elem: 'css',
    url: '../../libs/animated/css/animate.css'
  }, {
    elem: 'css',
    url: 'fonts.css'
  }, {
    elem: 'css',
    url: '../../libs/cover/cover.css'
  }, {
    elem: 'css',
    url: '../../libs/css/bootstrap.css'
  }, {
    elem: 'css',
    url: '../../libs/jquery-3.2.1/jquery-ui.min.css'
  }, {
    elem: 'css',
    url: '../../libs/twentytwenty-master/css/twentytwenty.css'
  }],
  scripts: [{
    elem: 'js',
    url: 'index.min.js'
  }, {
    elem: 'js',
    url: '../../libs/jquery-1.8.2/jquery.min.js'
  }, {
    elem: 'js',
    url: '../../libs/jquery-3.2.1/jquery-3.2.1.min.js'
  }, {
    elem: 'js',
    url: '../../libs/jquery-3.2.1/jquery-ui.min.js'
  }, {
    elem: 'js',
    url: '../../libs/isotope-docs/js/isotope-docs.min.js'
  }, {
    elem: 'js',
    url: '../../libs/jquery-easing/jquery.easing.min.js'
  }, {
    elem: 'js',
    url: '../../libs/fullPage.js/jquery.fullPage.js'
  }, {
    elem: 'js',
    url: 'http://cdnjs.cloudflare.com/ajax/libs/jQuery-slimScroll/1.3.1/jquery.slimscroll.min.js'
  }, {
    elem: 'js',
    url: '../../libs/jquery-circle-progress/dist/circle-progress.js'
  }, {
    elem: 'js',
    url: '../../libs/progressbar/progressbar.js'
  }, {
    elem: 'js',
    url: '../../libs/fullPage.js/init.fullPage.js'
  }, {
    elem: 'js',
    url: '../../libs/init.cover.bgv.js'
  }, {
    elem: 'js',
    url: '../../libs/init.click.pushy.js'
  }, {
    elem: 'js',
    url: '../../libs/bxslider/jquery.bxslider.min.js'
  }, {
    elem: 'js',
    url: '../../libs/init.bxslider.js'
  }, {
    elem: 'js',
    url: '../../libs/init.multi.bxslider.js'
  }, {
    elem: 'js',
    url: '../../libs/init.isotope.filter.js'
  }, {
    elem: 'css',
    url: '../../libs/fancybox-master/dist/jquery.fancybox.min.css'
  }, {
    elem: 'js',
    url: '../../libs/fancybox-master/dist/jquery.fancybox.min.js'
  }, {
    elem: 'js',
    url: '../../libs/RangeNumber.js'
  }, {
    elem: 'js',
    url: '../../libs/modal.js'
  }, {
    elem: 'js',
    url: '../../libs/init.accordion.js'
  }, {
    elem: 'js',
    url: '../../libs/init.accordion.js'
  }, {
    elem: 'js',
    url: 'https://www.google.com/jsapi'
  }, {
    elem: 'js',
    url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAiPRimoqX2VJ2I3JeCuhJ7H98vhHjQtKo&callback=init'
  }, {
    elem: 'js',
    url: '../../libs/init.map.js'
  }, {
    elem: 'js',
    url: '../../libs/init.main-menu.js'
  }, {
    elem: 'js',
    url: '../../libs/jquery-before-after-slider.min.js'
  }, {
    elem: 'js',
    url: '../../libs/twentytwenty-master/js/jquery.event.move.js'
  }, {
    elem: 'js',
    url: '../../libs/twentytwenty-master/js/jquery.twentytwenty.js'
  }, {
    elem: 'js',
    url: '../../libs/init.twentytwenty.js'
  }, {
    elem: 'js',
    url: '../../libs/init.reviews.js'
  }],
  mods: {
    theme: 'islands'
  },
  content: [{
    block: 'header',
    cls: 'section',
    content: [{
      block: 'mdl',
      attrs: {
        id: 'mdl'
      },
      content: {
        block: 'content',
        cls: 'col-xs-4',
        mix: {
          block: 'mdl',
          elem: 'content'
        },
        content: [{
          block: 'close',
          mix: {
            block: 'mdl',
            elem: 'close'
          },
          tag: 'span',
          attrs: {
            style: "background-image: url('../../img/cancel.png');"
          }
        }, {
          block: 'form',
          mix: {
            block: 'form',
            elem: 'width'
          },
          content: [{
            block: 'right',
            content: [{
              block: 'navigation',
              mix: {
                block: 'form',
                elem: 'navigation'
              },
              content: [{
                block: 'item',
                content: {
                  block: 'input',
                  mix: {
                    block: 'form',
                    elem: 'input'
                  },
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  placeholder: 'Имя'
                }
              }, {
                block: 'item',
                content: {
                  block: 'input',
                  mix: {
                    block: 'form',
                    elem: 'input'
                  },
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  placeholder: 'Телефон'
                }
              }, {
                block: 'item',
                content: {
                  block: 'input',
                  mix: {
                    block: 'form',
                    elem: 'input'
                  },
                  mods: {
                    theme: 'islands',
                    size: 'm'
                  },
                  placeholder: 'Email'
                }
              }]
            }, {
              block: 'textarea',
              mix: {
                block: 'form',
                elem: 'textarea'
              },
              mods: {
                theme: 'islands',
                size: 'm'
              },
              placeholder: 'Описание'
            }, {
              elem: 'button',
              mix: {
                block: 'button',
                elem: 'description'
              },
              content: {
                block: 'button',
                mix: {
                  block: 'button',
                  elem: 'subscribe'
                },
                mods: {
                  theme: 'islands',
                  size: 'l',
                  type: 'submit'
                },
                text: 'Заказать'
              }
            }]
          }]
        }]
      }
    }, {
      block: 'container',
      content: {
        block: 'row',
        content: [{
          block: 'col-xs-5',
          content: [{
            block: 'pushy',
            content: {}
          }, {
            block: 'logo',
            mix: {
              block: 'logo',
              elem: 'image'
            },
            content: {
              block:'image',
              url: '../../../img/a4header.png'
            }
          }]
        }, {
          block: 'col-xs-2',
          content: [{
            block: 'social-menu',
            content: [{
              elem: 'list',
              content: [{
                src: "background-image: url('../../img/viber.png');"
              }, {
                src: "background-image: url('../../img/vk-logo-of-social-network.png');"
              }, {
                src: "background-image: url('../../img/instagram-symbol.png');"
              }].map(function(item) {
                return {
                  elem: 'item',
                  content: {
                    block: 'link',
                    mods: {
                      type: 'link'
                    },
                    attrs: {
                      style: item.src
                    }
                  }
                }
              })
            }]
          }]
        }, {
          block: 'col-xs-2',
          cls: 'text',
          content: [{
            block: 'wrap',
            tag: 'ul',
            content: [{
              block: 'item',
              tag: 'li',
              mix: {
                block: 'text',
                elem: 'item'
              },
              content: [{
                block: 'icons',
                tag: 'span',
                mix: {
                  block: 'text',
                  elem: 'icons'
                }
              }, {
                block: 'tel',
                tag: 'span',
                mix: {
                  block: 'text',
                  elem: 'tel'
                },
                content: '89277146878'
              }]
            }, {
              block: 'item',
              tag: 'li',
              mix: {
                block: 'text',
                elem: 'item'
              },
              content: [{
                block: 'icons',
                mix: {
                  block: 'text',
                  elem: 'icons'
                },
                tag: 'span',
              }, {
                block: 'tel',
                tag: 'span',
                mix: {
                  block: 'text',
                  elem: 'tel'
                },
                content: '89277146878'
              }]
            }]
          }]
        }, {
          block: 'col-xs-2',
          content: {
            block: 'text',
            content: [{
              block: 'email',
              mix: {
                block: 'text',
                elem: 'email'
              },
              content: 'info@domain.com'
            }]
          }
        }]
      }
    }]
  }, {
    block: 'section',
    cls: 'sld',
    content: {
      block: 'col-xs-12',
      mix: {
        block: 'sld',
        elem: 'wrap'
      },
      content: [{
        block: 'gallery',
        content: [{
          block: 'slider',
          mix: {
            block: 'gallery',
            elem: 'slider'
          },
          content: [{
            block: 'title',
            mix: {
              block: 'gallery',
              elem: 'title'
            },
            content: {
              block: 'item',
              content: 'Клининг и химчистка в Самарской области цена от 39 руб.'
            }
          },{
            block: 'nav',
            mix: {
              block: 'slider',
              elem: 'nav'
            },
            tag: 'ul',
            content: [{
              src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
              header: 'Химчистка мебели',
              body: 'Lorem ipsum dolor sit amet,  consectetur adipisicing',
              sale: '48 руб.'
            }, {
              src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
              header: 'Генеральная уборка',
              body: 'Lorem ipsum dolor sit amet,  consectetur adipisicing',
              sale: '58 руб.'
            }, {
              src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
              header: 'Уборка после ремонта',
              body: 'Lorem ipsum dolor sit amet,  consectetur adipisicing',
              sale: '38 руб.'
            }, {
              src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
              header: 'Химчистка салона автомобиля',
              body: 'Lorem ipsum dolor sit amet,  consectetur adipisicing',
              sale: '88 руб.'
            }, {
              src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
              header: 'Обслуживание офисов',
              body: 'Lorem ipsum dolor sit amet,  consectetur adipisicing',
              sale: '98 руб.'
            }, {
              src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
              header: 'Обслуживание яхт и катеров',
              body: 'Lorem ipsum dolor sit amet,  consectetur adipisicing',
              sale: '400 руб.'
            }, {
              src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
              header: 'Мойка окон',
              body: 'Lorem ipsum dolor sit amet,  consectetur adipisicing',
              sale: '28 руб.'
            }, {
              src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
              header: 'После праздничная уборка',
              body: 'Lorem ipsum dolor sit amet,  consectetur adipisicing',
              sale: '48 руб.'
            }, {
              src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
              header: 'Химчистка ковров',
              body: 'Lorem ipsum dolor sit amet,  consectetur adipisicing',
              sale: '80 руб.'
            }, {
              src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
              header: 'Чистка саун и бассейнов',
              body: 'Lorem ipsum dolor sit amet,  consectetur adipisicing',
              sale: '148 руб.'
            }, {
              src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
              header: 'Аренда парогенератора Karcher',
              body: 'Lorem ipsum dolor sit amet,  consectetur adipisicing',
              sale: '248 руб.'
            }].map(function(item) {
              return {
                block: 'nav-item',
                tag: 'li',
                mods: {
                  type: 'link'
                },
                content: [{
                  block: 'img',
                  mix: {
                    block: 'sld',
                    elem: 'img'
                  },
                  attrs: {
                    style: item.src
                  }
                }, {
                  block: 'description',
                  content: [{
                    elem: 'text',
                    mix: {
                      block: 'description',
                      elem: 'text'
                    },
                    content: item.header
                  }, {
                    block: 'button',
                    mix: {
                      block: 'description',
                      elem: 'button'
                    },
                    mods: {
                      theme: 'y',
                      size: 'l',
                      type: 'submit'
                    },
                    text: 'Заказать'
                  },{
                    block: 'sale',
                    tag: 'span',
                    content:{
                      block: 'main-menu',
                      mods: {
                        mgt: 'top'
                      },
                      content: [{
                        elem: 'section',
                        content: {
                          elem: 'list',
                          cls: 'isotope',
                          content: [{
                            elem: 'item',
                            elemMods: {
                              color: 'black'
                            },
                            content: {
                              block: 'link',
                              attrs: {
                                'data-filter': '.web'
                              },
                              mods: {
                                theme: 'islands',
                                size: 'x'
                              },
                              url: 'javascript:void(0);',
                              content: 'за'
                            }
                          }, {
                            elem: 'item',
                            elemMods: {
                              color: 'black'
                            },
                            content: {
                              block: 'link',
                              attrs: {
                                'data-filter': '.apps'
                              },
                              mods: {
                                theme: 'islands',
                                size: 'x'
                              },
                              url: 'javascript:void(0);',
                              content: item.sale
                            }
                          }]
                        }
                      }]
                    }
                  }]
                }]
              };
            })
          }, {
            block: 'custom-nav',
            content: [{
              tag: 'span',
              attrs: {
                id: 'slider-next'
              }
            }, {
              tag: 'span',
              attrs: {
                id: 'slider-prev'
              }
            }]
          }]
        }]
      }]
    }
  }, {
    block: 'product',
    mix: {
      block: 'header',
      elem: 'product'
    },
    mods: {
      height: 'h'
    },
    content: [{
      block: 'text',
      mix: {
        block: 'text',
        elem: 'h2'
      },
      tag: 'h2',
      content: 'Высокое качество Нашего сервиса И низкие цены'
    }]
  }, {
    block: 'section',
    cls: 'service',
    content: [{
      block: 'container',
      content: {
        block: 'row',
        content: [{
          block: 'main-menu',
          content: [{
            elem: 'section',
            content: {
              elem: 'list',
              content: [{
                elem: 'item',
                content: {
                  block: 'navigation',
                  cls: 'g',
                  content: [{
                    src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
                    body: 'Химчистка мебели',
                    id: '0'
                  }, {
                    src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
                    body: 'Генеральная уборка',
                    id: '1'
                  }, {
                    src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
                    body: 'Уборка после ремонта',
                    id: '2'
                  }, {
                    src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
                    body: 'Мойка окон',
                    id: '3'
                  }].map(function(item) {
                    return {
                      block: 'item h',
                      content: [{
                        block: 'icons',
                        attrs: {
                          style: item.src
                        }
                      }, {
                        block: 'all',
                        attrs: {
                          'data-filter': '*',
                          id: item.id
                        },
                        tag: 'button',
                        content: item.body
                      }]
                    }
                  })
                }
              }]
            }
          }]
        }, {
          block: 'wrap',
          mix: {
            block: 'service',
            elem: 'wrap'
          },
          content: [{
            block: 'main-menu',
            mods: {
              width: 'w'
            },
            content: [{
              elem: 'section',
              content: {
                elem: 'list',
                content: [{
                  elem: 'item',
                  content: {
                    block: 'navigation',
                    cls: 'g',
                    content: [{
                      src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
                      body: 'Обслуживание яхт и катеров',
                      id: '5'
                    }, {
                      src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
                      body: 'После праздничная уборка',
                      id: '6'
                    }, {
                      src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
                      body: 'Химчистка ковров',
                      id: '7'
                    }, {
                      src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
                      body: 'Чистка саун и бассейнов',
                      id: '8'
                    }, {
                      src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
                      body: 'Аренда парогенератора Karcher',
                      id: '9'
                    }, {
                      src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
                      body: 'Обслуживание офисных помещений',
                      id: '10'
                    }, {
                      src: "background-image: url('../../img/mt-1015-home-header-bg.jpg');",
                      body: 'Химчистка салона автомобиля',
                      id: '11'
                    }].map(function(item) {
                      return {
                        block: 'item',
                        content: [{
                          block: 'icons',
                          attrs: {
                            style: item.src
                          }
                        }, {
                          block: 'all',
                          attrs: {
                            'data-filter': '*',
                            id: item.id
                          },
                          tag: 'button',
                          content: item.body
                        }]
                      }
                    })
                  }
                }]
              }
            }]
          }, {
            block: 'content',
            content: [{
              block: 'image',
              mix: {
                block: 'content',
                elem: 'image'
              },
              content: {}
            }, {
              block: 'text',
              tag: 'span',
              mix: {
                block: "content",
                elem: 'text'
              },
              content: [{
                block: 'item',
                mix: {
                  block: 'content',
                  elem: 'item'
                },
                attrs: {
                  id: '0'
                },
                content: [{
                  block: 'product',
                  mix: {
                    block: 'header',
                    elem: 'product'
                  },
                  content: [{
                    block: 'text',
                    mix: {
                      block: 'text',
                      elem: 'h2'
                    },
                    mods: {
                      clear: 'm'
                    },
                    tag: 'h2',
                    content: 'Химчистка мебели'
                  }]
                }, {
                  block: 'body',
                  mix: {
                    block: 'content',
                    elem: 'body'
                  },
                  content: 'Высококвалифицированные опытные специалисты компании качественно и аккуратно выполнят химчистку мягкой мебели, используя для разных тканей обивки особые специальные экологически безвредные химические средства. Правильная химчистка позволит сохранить первоначальную окраску и структуру ткани или кожи. Выведение пятен осуществляется как вручную, так и при помощи специальных оборудования - экстракторов и парогенераторов. Очистить мягкую и кожаную мебель от пятен и других сложных загрязнений самостоятельно - это трудоемкая и утомительная работа, а некоторые неудачные попытки заказчика самостоятельно удалить загрязнения с помощью бытовых химических средств очень осложняют задачу профессионалов, а порой делают ее решение невозможным.'
                }, {
                  block: 'include',
                  mix: {
                    block: 'body',
                    elem: 'include'
                  },
                  content: [{
                    block: 'main-menu',
                    content: [{
                      elem: 'section',
                      content: {
                        elem: 'list',
                        content: [{
                          elem: 'item',
                          content: [{
                            block: 'body',
                            mix: {
                              block: 'body',
                              elem: 'main-header'
                            },
                            content: 'Что включает в себя химчистка мебели:'
                          },{
                            block: 'navigation',
                            mix: {
                              block: 'navigation',
                              elem: 'include'
                            },
                            content: [{
                              content: 'Удаление пятен;'
                            }, {
                              content: 'Удаление жвачки;'
                            }, {
                              content: 'Влажная чистка экстракторным методом для тканей;'
                            }, {
                              content: 'Влажная чистка кожи вручную;'
                            }].map(function(item) {
                              return {
                                block: 'itm',
                                tag: 'li',
                                content: item.content
                              }
                            })
                          }]
                        }]
                      }
                    }]
                  }]
                }]
              },{
                block: 'item',
                mix: {
                  block: 'content',
                  elem: 'item'
                },
                attrs: {
                  id: '1'
                },
                content: [{
                  block: 'product',
                  mix: {
                    block: 'header',
                    elem: 'product'
                  },
                  content: [{
                    block: 'text',
                    mix: {
                      block: 'text',
                      elem: 'h2'
                    },
                    mods: {
                      clear: 'm'
                    },
                    tag: 'h2',
                    content: 'Генеральная уборка'
                  }]
                }, {
                  block: 'body',
                  mix: {
                    block: 'content',
                    elem: 'body'
                  },
                  content: 'Правильная генеральная уборка очень важна. Главное, при проведении уборки не испортить поверхность Вашего интерьера, сохранить чистоту и внешний вид Вашей мебели. Высококвалифицированный персонал выполнит для Вас уборку в кратчайшие сроки.Мы тщательно и аккуратно очищаем потолок и стены, пол и любые инженерные сооружения. Ваша мебель, осветительные приборы и техника будут сверкать.Наши квалифицированные специалисты выполнят генеральную уборку в кратчайшие сроки.'
                }, {
                  block: 'include',
                  mix: {
                    block: 'body',
                    elem: 'include'
                  },
                  content: [{
                    block: 'main-menu',
                    content: [{
                      elem: 'section',
                      content: {
                        elem: 'list',
                        content: [{
                          elem: 'item',
                          content: [{
                            block: 'body',
                            mix: {
                              block: 'body',
                              elem: 'main-header'
                            },
                            content: 'Что включает в себя уборка:'
                          },{
                            block: 'navigation',
                            mix: {
                              block: 'navigation',
                              elem: 'include'
                            },
                            content: [{
                              content: 'Чистка пола, ковровых покрытий пылесосом;'
                            }, {
                              content: 'Чистка мягкой мебели пылесосом;'
                            }, {
                              content: 'Влажная уборка твердых полов;'
                            }, {
                              content: 'Удаление пыли и грязи с рам, окон, зеркал, подоконников;'
                            }, {
                              content: 'Удаление пыли и грязи с перегородок с батарей, с бытовой техники, со светильников и люстр;'
                            }, {
                              content: 'Удаление пыли и грязи с открытых поверхностей мебели, ножек к ней, открытых полочек в ней;'
                            }, {
                              content: 'Удаление пыли и грязи с розеток, выключателей, дверей, плинтусов;'
                            }, {
                              content: 'Дезинфекция туалетной и ванной, кухонной комнат, раковин, газовой плиты;'
                            }, {
                              content: 'Удаление пыли и грязи с труб (открытых), проводов;'
                            },{
                              content: 'Выемка мусора из корзин;'
                            },{
                              content: 'Вынос мусора;'
                            }].map(function(item) {
                              return {
                                block: 'itm',
                                tag: 'li',
                                content: item.content
                              }
                            })
                          }]
                        }]
                      }
                    }]
                  }]
                },{

                }]
              },{
                block: 'item',
                mix: {
                  block: 'content',
                  elem: 'item'
                },
                attrs: {
                  id: '2'
                },
                content: [{
                  block: 'product',
                  mix: {
                    block: 'header',
                    elem: 'product'
                  },
                  content: [{
                    block: 'text',
                    mix: {
                      block: 'text',
                      elem: 'h2'
                    },
                    mods: {
                      clear: 'm'
                    },
                    tag: 'h2',
                    content: 'Уборка после ремонта'
                  }]
                }, {
                  block: 'body',
                  mix: {
                    block: 'content',
                    elem: 'body'
                  },
                  content: 'Правильная уборка после ремонта очень важна. Главное, при проведении после ремонтной уборки не испортить поверхность Вашего интерьера, сохранить чистоту и внешний вид Вашей мебели. Высококвалифицированный персонал выполнит для Вас уборку в кратчайшие сроки.Мы удаляем строительную пыль и грязь, пятна побелки, шпатлевки и цемента. Мы тщательно и аккуратно очищаем потолок и стены, пол и любые инженерные сооружения от лишних пятен краски. Отчистим не только пятна, но и доведем до блеска сами стекла. Мы обещаем, что ваша мебель, осветительные приборы и техника будут сверкать. В санузлах, душевых кабин, ванных, очищая и керамическую плитку, и швы. Не причиняя вреда очищаемыми химическими средствами.Наши квалифицированные специалисты выполнят уборку после ремонта в кратчайшие сроки.'
                }, {
                  block: 'include',
                  mix: {
                    block: 'body',
                    elem: 'include'
                  },
                  content: [{
                    block: 'main-menu',
                    content: [{
                      elem: 'section',
                      content: {
                        elem: 'list',
                        content: [{
                          elem: 'item',
                          content: [{
                            block: 'body',
                            mix: {
                              block: 'body',
                              elem: 'main-header'
                            },
                            content: 'Что включает в себя уборка:'
                          },{
                            block: 'navigation',
                            mix: {
                              block: 'navigation',
                              elem: 'include'
                            },
                            content: [{
                              content: 'Чистка пола, ковровых покрытий пылесосом;'
                            }, {
                              content: 'Чистка мягкой мебели пылесосом;'
                            }, {
                              content: 'Влажная уборка твердых полов;'
                            }, {
                              content: 'Удаление пыли и грязи с рам, окон, зеркал, подоконников;'
                            }, {
                              content: 'Удаление пыли и грязи с перегородок с батарей, с бытовой техники, со светильников и люстр;'
                            }, {
                              content: 'Удаление пыли и грязи с открытых поверхностей мебели, ножек к ней, открытых полочек в ней;'
                            }, {
                              content: 'Удаление пыли и грязи с розеток, выключателей, дверей, плинтусов;'
                            }, {
                              content: 'Дезинфекция туалетной и ванной, кухонной комнат, раковин, газовой плиты;'
                            }, {
                              content: 'Удаление пыли и грязи с труб (открытых), проводов;'
                            },{
                              content: 'Выемка мусора из корзин;'
                            },{
                              content: 'Вынос мусора;'
                            }].map(function(item) {
                              return {
                                block: 'itm',
                                tag: 'li',
                                content: item.content
                              }
                            })
                          }]
                        }]
                      }
                    }]
                  }]
                },{

                }]
              },{
                block: 'item',
                mix: {
                  block: 'content',
                  elem: 'item'
                },
                attrs: {
                  id: '3'
                },
                content: [{
                  block: 'product',
                  mix: {
                    block: 'header',
                    elem: 'product'
                  },
                  content: [{
                    block: 'text',
                    mix: {
                      block: 'text',
                      elem: 'h2'
                    },
                    mods: {
                      clear: 'm'
                    },
                    tag: 'h2',
                    content: 'Мойка окон'
                  }]
                }, {
                  block: 'body',
                  mix: {
                    block: 'content',
                    elem: 'body'
                  },
                  content: 'Мойка окон - услуга, которую часто невозможно выполнить бытовыми способами, а можно выполнить с помощью профессионального инвентаря, высокой стремянки. А если окна и вовсе не открываются, то их мытье снаружи без услуг клининга становится опасным.На высоте двух этажей – мы пользуемся высокой стремянкой, лестницей и швабрами для окон. На высоте от трех этажей мы приезжаем на машине Кобре (автовышка), на которой можем работать на высоте до пяти этажей.На высоте выше пятиэтажного здания работают промышленные альпинисты, которые крепятся на крыше, и спускаются вниз по канатам. Наши квалифицированные специалисты выполнят мытье окон в кратчайшие сроки.'
                }, {
                  block: 'include',
                  mix: {
                    block: 'body',
                    elem: 'include'
                  },
                  content: [{
                  }]
                }]
              },{
                block: 'item',
                mix: {
                  block: 'content',
                  elem: 'item'
                },
                attrs: {
                  id: '4'
                },
                content: [{
                  block: 'product',
                  mix: {
                    block: 'header',
                    elem: 'product'
                  },
                  content: [{
                    block: 'text',
                    mix: {
                      block: 'text',
                      elem: 'h2'
                    },
                    mods: {
                      clear: 'm'
                    },
                    tag: 'h2',
                    content: 'Обслуживание яхт и катеров'
                  }]
                }, {
                  block: 'body',
                  mix: {
                    block: 'content',
                    elem: 'body'
                  },
                  content: 'Мы готовы в любое удобное для Вас время встретиться с Вами, обсудить объемы и перечень интересующих Вас услуг, а также возможности нашего сотрудничества.'
                }, {
                  block: 'include',
                  mix: {
                    block: 'body',
                    elem: 'include'
                  },
                  content: [{
                    block: 'main-menu',
                    content: [{
                      elem: 'section',
                      content: {
                        elem: 'list',
                        content: [{
                          elem: 'item',
                          content: [{
                            block: 'body',
                            mix: {
                              block: 'body',
                              elem: 'main-header'
                            },
                            content: 'Что включает в себя уборка:'
                          },{
                            block: 'navigation',
                            mix: {
                              block: 'navigation',
                              elem: 'include'
                            },
                            content: [{
                              content: 'Мойка палубы, борат, камбуза.'
                            }, {
                              content: 'Мойка стёкол иллюминатора.'
                            }, {
                              content: 'Уборка, чистка и мойка в трюмах.'
                            }, {
                              content: 'Химическая чистка диванов, мягкой мебели.'
                            }, {
                              content: 'Чистка и обработка кожи.'
                            }, {
                              content: 'Протирка хромированных поверхностей.'
                            }, {
                              content: 'Химчистка обивки, химчистка ковров.'
                            }, {
                              content: 'Химчистка ковролина.'
                            }, {
                              content: 'Уборка санузлов.'
                            },{
                              content: 'Удаление пыли с элементов интерьера яхты.'
                            }].map(function(item) {
                              return {
                                block: 'itm',
                                tag: 'li',
                                content: item.content
                              }
                            })
                          }]
                        }]
                      }
                    }]
                  }]
                }]
              },{
                block: 'item',
                mix: {
                  block: 'content',
                  elem: 'item'
                },
                attrs: {
                  id: '5'
                },
                content: [{
                  block: 'product',
                  mix: {
                    block: 'header',
                    elem: 'product'
                  },
                  content: [{
                    block: 'text',
                    mix: {
                      block: 'text',
                      elem: 'h2'
                    },
                    mods: {
                      clear: 'm'
                    },
                    tag: 'h2',
                    content: 'Обслуживание яхт и катеров'
                  }]
                }, {
                  block: 'body',
                  mix: {
                    block: 'content',
                    elem: 'body'
                  },
                  content: 'Мы готовы в любое удобное для Вас время встретиться с Вами, обсудить объемы и перечень интересующих Вас услуг, а также возможности нашего сотрудничества.'
                }, {
                  block: 'include',
                  mix: {
                    block: 'body',
                    elem: 'include'
                  },
                  content: [{
                    block: 'main-menu',
                    content: [{
                      elem: 'section',
                      content: {
                        elem: 'list',
                        content: [{
                          elem: 'item',
                          content: [{
                            block: 'body',
                            mix: {
                              block: 'body',
                              elem: 'main-header'
                            },
                            content: 'Что включает в себя уборка:'
                          },{
                            block: 'navigation',
                            mix: {
                              block: 'navigation',
                              elem: 'include'
                            },
                            content: [{
                              content: 'Мойка палубы, борат, камбуза.'
                            }, {
                              content: 'Мойка стёкол иллюминатора.'
                            }, {
                              content: 'Уборка, чистка и мойка в трюмах.'
                            }, {
                              content: 'Химическая чистка диванов, мягкой мебели.'
                            }, {
                              content: 'Чистка и обработка кожи.'
                            }, {
                              content: 'Протирка хромированных поверхностей.'
                            }, {
                              content: 'Химчистка обивки, химчистка ковров.'
                            }, {
                              content: 'Химчистка ковролина.'
                            }, {
                              content: 'Уборка санузлов.'
                            },{
                              content: 'Удаление пыли с элементов интерьера яхты.'
                            }].map(function(item) {
                              return {
                                block: 'itm',
                                tag: 'li',
                                content: item.content
                              }
                            })
                          }]
                        }]
                      }
                    }]
                  }]
                }]
              },{
                block: 'item',
                mix: {
                  block: 'content',
                  elem: 'item'
                },
                attrs: {
                  id: '6'
                },
                content: [{
                  block: 'product',
                  mix: {
                    block: 'header',
                    elem: 'product'
                  },
                  content: [{
                    block: 'text',
                    mix: {
                      block: 'text',
                      elem: 'h2'
                    },
                    mods: {
                      clear: 'm'
                    },
                    tag: 'h2',
                    content: 'После праздничная уборка(кв.м.)'
                  }]
                }, {
                  block: 'body',
                  mix: {
                    block: 'content',
                    elem: 'body'
                  },
                  content: 'Наша компания предлагает для Вас выполнить все на высшем уровне.Торжества позади, а впереди гора грязной посуды, пятна на ковре и мебели. К сожалению такие веселые праздники, как День Рождения редко остаются без таких последствий как грязная кухня, конфетти и елочные иголки в труднодоступных местах, пятна от различных напитков. Необходимость последующей многочасовой уборки может здорово подпортить праздник.Предлагаем вам не загружать свою голову лишними проблемами и воспользоваться услугами нашей компании. Высококвалифицированный персонал выполнит для Вас уборку в кратчайшие сроки.'
                }, {
                  block: 'include',
                  mix: {
                    block: 'body',
                    elem: 'include'
                  },
                  content: [{
                    block: 'main-menu',
                    content: [{
                      elem: 'section',
                      content: {
                        elem: 'list',
                        content: [{
                          elem: 'item',
                          content: [{
                            block: 'body',
                            mix: {
                              block: 'body',
                              elem: 'main-header'
                            },
                            content: 'Что включает в себя уборка:'
                          },{
                            block: 'navigation',
                            mix: {
                              block: 'navigation',
                              elem: 'include'
                            },
                            content: [{
                              content: 'Мытье грязной посуды;'
                            }, {
                              content: 'Чистка пола, ковровых покрытий пылесосом'
                            }, {
                              content: 'Мытье полов;'
                            }, {
                              content: 'Химическая чистка диванов, мягкой мебели.'
                            }, {
                              content: 'Мытье туалета, газовой плиты, раковины;'
                            }, {
                              content: 'Наведение порядка;'
                            }, {
                              content: 'Удаление пятен со всех поверхностей;'
                            }, {
                              content: 'Выемка мусора из корзин;'
                            }, {
                              content: 'Вынос мусора.'
                            }].map(function(item) {
                              return {
                                block: 'itm',
                                tag: 'li',
                                content: item.content
                              }
                            })
                          }]
                        }]
                      }
                    }]
                  }]
                }]
              },{
                block: 'item',
                mix: {
                  block: 'content',
                  elem: 'item'
                },
                attrs: {
                  id: '7'
                },
                content: [{
                  block: 'product',
                  mix: {
                    block: 'header',
                    elem: 'product'
                  },
                  content: [{
                    block: 'text',
                    mix: {
                      block: 'text',
                      elem: 'h2'
                    },
                    mods: {
                      clear: 'm'
                    },
                    tag: 'h2',
                    content: 'Химчистка ковров(кв.м.)'
                  }]
                }, {
                  block: 'body',
                  mix: {
                    block: 'content',
                    elem: 'body'
                  },
                  content: 'Химическая чистка производится специальными ковромоечными машинами с применением специальных сертифицированных химических средств. Покрытия чистятся с использованием экстракторного способа чистки. При необходимости наиболее загрязненные места обрабатываются вручную. Большинство пятен различного происхождения: бытового (чай, кофе, сок, косметика). Биологического: (плесень, грибок). Масляной основы (смола, жир) можно вывести с помощью пятновыводителей. После проведения химической чистки ковровое покрытие приобретает первоначальную чистоту и свежий вид.'
                }, {
                  block: 'include',
                  mix: {
                    block: 'body',
                    elem: 'include'
                  },
                  content: [{
                    block: 'main-menu',
                    content: [{
                      elem: 'section',
                      content: {
                        elem: 'list',
                        content: [{
                          elem: 'item',
                          content: [{
                            block: 'body',
                            mix: {
                              block: 'body',
                              elem: 'main-header'
                            },
                            content: 'Что включает в себя уборка:'
                          },{
                            block: 'navigation',
                            mix: {
                              block: 'navigation',
                              elem: 'include'
                            },
                            content: [{
                              content: 'Доставка + постилка;'
                            }, {
                              content: 'Отбивание пыли;'
                            }, {
                              content: 'Удаление пятен;'
                            }, {
                              content: 'Удаление жвачки;'
                            }, {
                              content: 'Мокрая чистка (в зависимости от вида материала);'
                            }, {
                              content: 'Влажная чистка экстакторным методом (в зависимости от вида материала).'
                            }].map(function(item) {
                              return {
                                block: 'itm',
                                tag: 'li',
                                content: item.content
                              }
                            })
                          }]
                        }]
                      }
                    }]
                  }]
                }]
              },{
                block: 'item',
                mix: {
                  block: 'content',
                  elem: 'item'
                },
                attrs: {
                  id: '8'
                },
                content: [{
                  block: 'product',
                  mix: {
                    block: 'header',
                    elem: 'product'
                  },
                  content: [{
                    block: 'text',
                    mix: {
                      block: 'text',
                      elem: 'h2'
                    },
                    mods: {
                      clear: 'm'
                    },
                    tag: 'h2',
                    content: 'Чистка саун и бассейнов(по договоренности)'
                  }]
                }, {
                  block: 'body',
                  mix: {
                    block: 'content',
                    elem: 'body'
                  },
                  content: 'Фонтаны, бассейны и сауны нуждаются в профессиональной чистке. Внутренняя поверхность фонтанов, бассейнов и саун обрабатывается с использованием специализированных средств, которые гарантируют чистоту обрабатываемой поверхности, а также содержат вещества, предотвращающие коррозию.Для чистки фонтанов, бассейнов и саун используются специальные вещества, которые оказывают антимикробное действие, эффективны против бактерий, вирусов, грибов, водорослей и спор даже в условиях низкой температуры. Эти вещества абсолютно безопасны для окружающей среды и человека.Чистка фонтанов, бассейнов и саун производится при помощи профессионального оборудования, позволяющего эффективно очищать как горизонтальные, как и вертикальные поверхности.После завершения процесса очистки наносится специальный защищающий состав, благодаря которому поверхность будет долгое время оставаться чистой.Высококвалифицированный персонал выполнит для Вас чистку в кратчайшие сроки.'
                }, {
                  block: 'include',
                  mix: {
                    block: 'body',
                    elem: 'include'
                  },
                  content: [{
                    block: 'main-menu',
                    content: [{
                      elem: 'section',
                      content: {
                        elem: 'list',
                        content: [{
                          elem: 'item',
                          content: [{
                            block: 'body',
                            mix: {
                              block: 'body',
                              elem: 'main-header'
                            },
                            content: 'Что включает в себя уборка:'
                          },{
                            block: 'navigation',
                            mix: {
                              block: 'navigation',
                              elem: 'include'
                            },
                            content: [{
                              content: 'Чистка внутренних поверхностей;'
                            }, {
                              content: 'Удаление подтеков, ржавчины;'
                            }, {
                              content: 'Удаление пятен;'
                            }, {
                              content: 'Дезинфекция;'
                            }, {
                              content: 'Мокрая чистка (в зависимости от вида материала);'
                            }, {
                              content: 'Нанесение защитного слоя.'
                            }].map(function(item) {
                              return {
                                block: 'itm',
                                tag: 'li',
                                content: item.content
                              }
                            })
                          }]
                        }]
                      }
                    }]
                  }]
                }]
              },{
                block: 'item',
                mix: {
                  block: 'content',
                  elem: 'item'
                },
                attrs: {
                  id: '9'
                },
                content: [{
                  block: 'product',
                  mix: {
                    block: 'header',
                    elem: 'product'
                  },
                  content: [{
                    block: 'text',
                    mix: {
                      block: 'text',
                      elem: 'h2'
                    },
                    mods: {
                      clear: 'm'
                    },
                    tag: 'h2',
                    content: 'Аренда парогенератора Karcher'
                  }]
                }, {
                  block: 'body',
                  mix: {
                    block: 'content',
                    elem: 'body'
                  },
                  content: 'У нас Вы можете взять в аренду парогенератор Karcher. Стоимость указанна за сутки! 600 рублей'
                }]
              },{
                block: 'item',
                mix: {
                  block: 'content',
                  elem: 'item'
                },
                attrs: {
                  id: '10'
                },
                content: [{
                  block: 'product',
                  mix: {
                    block: 'header',
                    elem: 'product'
                  },
                  content: [{
                    block: 'text',
                    mix: {
                      block: 'text',
                      elem: 'h2'
                    },
                    mods: {
                      clear: 'm'
                    },
                    tag: 'h2',
                    content: 'Постоянное обслуживание офисных помещений(кв.м.)'
                  }]
                }, {
                  block: 'body',
                  mix: {
                    block: 'content',
                    elem: 'body'
                  },
                  content: 'Уборка офисных помещений – это разовая ежедневная уборка, в ходе которой качественно выполняется весь комплекс работ, необходимый для приведения в порядок офисных помещений в соответствии с требованиями заказчика. Уборка офисных помещений - одно из приоритетных направлений деятельности компании. Качественно выполненная уборка офиса придает помещениям свежесть, блеск и чистоту, что положительно сказывается на результатах работы. Чистые рабочие места, вид которых внушает желание и стремление работать, повышает мотивацию сотрудников, и следовательно, уборка офисов прямым образом воздействует на положительные результаты труда всего коллектива. Пользуясь услугами клининга, Ваша компания уменьшает фонд зарплаты труда, экономит время на управлении сотрудников по уборке поиска и покупки химических средств и уборочного инвентаря, позволяет сосредоточится в своей профессиональной деятельности для более эффективной работы. Оплачивая клининговые услуги, снижает налогооблагаемый оборот (подоходный налог, социальные и пенсионные отчисления).'
                }, {
                  block: 'include',
                  mix: {
                    block: 'body',
                    elem: 'include'
                  },
                  content: [{
                    block: 'main-menu',
                    content: [{
                      elem: 'section',
                      content: {
                        elem: 'list',
                        content: [{
                          elem: 'item',
                          content: [{
                            block: 'body',
                            mix: {
                              block: 'body',
                              elem: 'main-header'
                            },
                            content: 'Что включает в себя уборка:'
                          },{
                            block: 'navigation',
                            mix: {
                              block: 'navigation',
                              elem: 'include'
                            },
                            content: [{
                              content: 'Сухая чистка ковровых покрытий пылесосом;'
                            }, {
                              content: 'Влажная чистка полов;'
                            }, {
                              content: 'Удаление пыли с перегородок, с батарей, с бытовой техники, со светильников и люстр;'
                            }, {
                              content: 'Удаление пыли с открытых поверхностей мебели, ножек к ней, открытых полочек в ней;'
                            }, {
                              content: 'Мокрая чистка (в зависимости от вида материала);'
                            }, {
                              content: 'Влажная протирка мягкой мебели, стульев, ножек к ним;'
                            }, {
                              content: 'Влажная уборка санузлов;'
                            }, {
                              content: 'Удаление пыли с труб (открытых), проводов;'
                            }, {
                              content: 'Выемка мусора из корзин;'
                            }, {
                              content: 'Вынос мусора;'
                            }].map(function(item) {
                              return {
                                block: 'itm',
                                tag: 'li',
                                content: item.content
                              }
                            })
                          }]
                        }]
                      }
                    }]
                  }]
                }]
              },{
                block: 'item',
                mix: {
                  block: 'content',
                  elem: 'item'
                },
                attrs: {
                  id: '11'
                },
                content: [{
                  block: 'product',
                  mix: {
                    block: 'header',
                    elem: 'product'
                  },
                  content: [{
                    block: 'text',
                    mix: {
                      block: 'text',
                      elem: 'h2'
                    },
                    mods: {
                      clear: 'm'
                    },
                    tag: 'h2',
                    content: 'Химчистка салона автомобиля'
                  }]
                }, {
                  block: 'body',
                  mix: {
                    block: 'content',
                    elem: 'body'
                  },
                  content: 'Химчистка салона Профессиональным моющим пылесосом (экстрактором) и парогенератором KARCHER. После чистки сушим салон автофеном "CarFon". На минивэны, кроссоверы и джипы цену уточнять по телефону'
                }]
              }]
            }, {
              block: 'sale',
              mix: {
                block: 'content',
                elem: 'sale'
              },
              content: {

              }
            }]
          }]
        }]
      }
    }]
  }, {
    block: 'section',
    cls: 'subscribe',
    content: [{
      block: 'logo',
      mix: {
        block: 'subscribe',
        elem: 'logo'
      },
      content: {}
    }, {
      block: 'wrap',
      mix: {
        block: 'subscribe',
        elem: 'wrap'
      },
      content: {
        block: 'form container',
        content: [{
          block: 'left',
          mix: {
            block: 'form',
            elem: 'left'
          },
          content: {
            block: 'image',
            url: '../../../img/a4.png'
          }
        },{
          block: 'right',
          mix: {
            block: 'form',
            elem: 'right'
          },
          content: [{
            block: 'navigation',
            content: [{
              block: 'item h',
              content: {
                block: 'input',
                mix: {
                  block: 'form',
                  elem: 'input'
                },
                mods: {
                  theme: 'islands',
                  size: 'm'
                },
                placeholder: 'Имя'
              }
            }, {
              block: 'item h',
              content: {
                block: 'input',
                mix: {
                  block: 'form',
                  elem: 'input'
                },
                mods: {
                  theme: 'islands',
                  size: 'm'
                },
                placeholder: 'Телефон'
              }
            }, {
              block: 'item h',
              content: {
                block: 'input',
                mix: {
                  block: 'form',
                  elem: 'input'
                },
                mods: {
                  theme: 'islands',
                  size: 'm'
                },
                placeholder: 'Email'
              }
            }]
          }, {
            block: 'textarea',
            mix: {
              block: 'form',
              elem: 'textarea'
            },
            mods: {
              theme: 'islands',
              size: 'm'
            },
            placeholder: 'Описание'
          }, {
            elem: 'button',
            mix: {
              block: 'button',
              elem: 'description'
            },
            content: {
              block: 'button',
              mix: {
                block: 'button',
                elem: 'subscribe'
              },
              mods: {
                theme: 'islands',
                size: 'l',
                type: 'submit'
              },
              text: 'Заказать'
            }
          }]
        }]
      }
    }]
  }, {
    block: 'fltr',
    content: {
      block: 'container',
      content: {
        block: 'row'
      }
    }
  }, {
    block: 'product',
    mix: {
      block: 'header',
      elem: 'product'
    },
    mods: {
      height: 'h'
    },
    content: [{
      block: 'text',
      mix: {
        block: 'text',
        elem: 'h2'
      },
      tag: 'h2',
      content: 'Наши Услуги'
    }]
  }, {
    block: 'section fltr',
    content: [{
      block: 'container',
      content: {
        block: 'row',
        content: [{
          block: 'container',
          cls: 'active',
          mix: {
            block: 'container',
            elem: 'web'
          },
          content: [{
            block: 'main-menu',
            mods: {
              mgt: 'top'
            },
            content: [{
              elem: 'section',
              content: {
                elem: 'list',
                cls: 'isotope',
                content: [{
                  elem: 'item',
                  elemMods: {
                    color: 'black'
                  },
                  content: {
                    block: 'link',
                    attrs: {
                      'data-filter': '.web'
                    },
                    mods: {
                      theme: 'islands',
                      size: 'x'
                    },
                    url: 'javascript:void(0);',
                    content: 'Химчистка мебели и ковров'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    color: 'black'
                  },
                  content: {
                    block: 'link',
                    attrs: {
                      'data-filter': '.apps'
                    },
                    mods: {
                      theme: 'islands',
                      size: 'x'
                    },
                    url: 'javascript:void(0);',
                    content: 'Генеральная Уборка'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    color: 'black'
                  },
                  content: {
                    block: 'link',
                    attrs: {
                      'data-filter': '.icons'
                    },
                    mods: {
                      theme: 'islands',
                      size: 'x'
                    },
                    url: 'javascript:void(0);',
                    content: 'Мойка фасадов'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    color: 'black'
                  },
                  content: {
                    block: 'link',
                    attrs: {
                      'data-filter': '.proff'
                    },
                    mods: {
                      theme: 'islands',
                      size: 'x'
                    },
                    url: 'javascript:void(0);',
                    content: 'Уборка помещений'
                  }
                }, {
                  elem: 'item',
                  elemMods: {
                    color: 'black'
                  },
                  attrs: {
                    'data-filter': '.top'
                  },
                  content: {
                    block: 'link',
                    mods: {
                      theme: 'islands',
                      size: 'x'
                    },
                    url: 'javascript:void(0);',
                    content: 'Химчистка салона автомобиля'
                  }
                }]
              }
            }]
          }, {
            block: 'grid',
            content: [{
              block: 'grid',
              elem: 'wrap',
              content: [{
                block: 'item',
                attrs: {
                  'data-category': 'web'
                },
                mix: {
                  block: 'grid',
                  elem: 'item web'
                },
                content: [{
                  block: 'wrap-image',
                  mix: {
                    block: 'grid',
                    elem: 'wrap-image'
                  },
                  content: [{
                    block: 'grid',
                    mix: {
                      block: 'grid',
                      elem: 'wrap-twentytwenty'
                    },
                    content: [{
                      block: 'image',
                      url: '../../img/after.jpg'
                    },{
                      block: 'image',
                      url: '../../img/before.jpg'
                    }]
                  }]
                }, {
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  }
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  }
                }]
              }, {
                block: 'item',
                attrs: {
                  'data-category': 'web'
                },
                mix: {
                  block: 'grid',
                  elem: 'item two web'
                },
                content: [{
                  block: 'wrap-image',
                  mix: {
                    block: 'grid',
                    elem: 'wrap-image'
                  },
                  content: [{
                    block: 'grid',
                    mix: {
                      block: 'grid',
                      elem: 'wrap-twentytwenty'
                    },
                    content: [{
                      block: 'image',
                      url: '../../img/after.jpg'
                    },{
                      block: 'image',
                      url: '../../img/before.jpg'
                    }]
                  }]
                }, {
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  }
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  }
                }]
              }, {
                block: 'item',
                attrs: {
                  'data-category': 'web'
                },
                mix: {
                  block: 'grid',
                  elem: 'item web'
                },
                content: [{
                  block: 'wrap-image',
                  mix: {
                    block: 'grid',
                    elem: 'wrap-image'
                  },
                  content: [{
                    block: 'grid',
                    mix: {
                      block: 'grid',
                      elem: 'wrap-twentytwenty'
                    },
                    content: [{
                      block: 'image',
                      url: '../../img/after.jpg'
                    },{
                      block: 'image',
                      url: '../../img/before.jpg'
                    }]
                  }]
                }, {
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  }
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  }
                }]
              }, {
                block: 'item',
                attrs: {
                  'data-category': 'all'
                },
                mix: {
                  block: 'grid',
                  elem: 'item apps'
                },
                content: [{
                  block: 'wrap-image',
                  mix: {
                    block: 'grid',
                    elem: 'wrap-image'
                  },
                  content: [{
                    block: 'grid',
                    mix: {
                      block: 'grid',
                      elem: 'wrap-twentytwenty'
                    },
                    content: [{
                      block: 'image',
                      url: '../../img/after.jpg'
                    },{
                      block: 'image',
                      url: '../../img/before.jpg'
                    }]
                  }]
                }, {
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  }
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  }
                }]
              }, {
                block: 'item',
                attrs: {
                  'data-category': 'all'
                },
                mix: {
                  block: 'grid',
                  elem: 'item apps'
                },
                content: [{
                  block: 'wrap-image',
                  mix: {
                    block: 'grid',
                    elem: 'wrap-image'
                  },
                  content: [{
                    block: 'grid',
                    mix: {
                      block: 'grid',
                      elem: 'wrap-twentytwenty'
                    },
                    content: [{
                      block: 'image',
                      url: '../../img/after.jpg'
                    },{
                      block: 'image',
                      url: '../../img/before.jpg'
                    }]
                  }]
                }, {
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  }
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  }
                }]
              }, {
                block: 'item',
                attrs: {
                  'data-category': 'all'
                },
                mix: {
                  block: 'grid',
                  elem: 'item apps'
                },
                content: [{
                  block: 'wrap-image',
                  mix: {
                    block: 'grid',
                    elem: 'wrap-image'
                  },
                  content: [{
                    block: 'grid',
                    mix: {
                      block: 'grid',
                      elem: 'wrap-twentytwenty'
                    },
                    content: [{
                      block: 'image',
                      url: '../../img/after.jpg'
                    },{
                      block: 'image',
                      url: '../../img/before.jpg'
                    }]
                  }]
                }, {
                  block: 'text-normal',
                  mix: {
                    block: 'grid',
                    elem: 'text-normal'
                  }
                }, {
                  block: 'text-small',
                  mix: {
                    block: 'grid',
                    elem: 'text-small'
                  }
                }]
              }]
            }]
          }]
        }]
      }
    }]
  }, {
    block: 'product',
    mix: {
      block: 'header',
      elem: 'product'
    },
    mods: {
      height: 'h'
    },
    content: [{
      block: 'text',
      mix: {
        block: 'text',
        elem: 'h2'
      },
      tag: 'h2',
      content: 'Наши Достижения'
    }]
  }, {
    block: 'section',
    cls: 'testimonials',
    content: {
      block: 'container',
      content: {
        block: 'row',
        content: {
          block: 'product',
          mix: {
            block: 'testimonials',
            elem: 'product'
          },
          content: [{
            block: 'wrap-product',
            content: [{
              block: 'product',
              mix: {
                block: 'testimonials',
                elem: 'item'
              },
              content: [{
                block: 'number',
                mix: {
                  block: 'product',
                  elem: 'number'
                },
                content: '365'
              }, {
                block: 'link',
                mods: {
                  theme: 'islands',
                  size: 'xl'
                },
                mix: {
                  block: 'text',
                  elem: 'circle'
                },
                url: 'https://bem.info/',
                content: 'Довольных клиентов',
                target: '_blank'
              }]
            }, {
              block: 'product',
              mix: {
                block: 'testimonials',
                elem: 'item'
              },
              content: [{
                block: 'number',
                mix: {
                  block: 'product',
                  elem: 'number'
                },
                content: '980'
              }, {
                block: 'link',
                mods: {
                  theme: 'islands',
                  size: 'xl'
                },
                mix: {
                  block: 'text',
                  elem: 'circle'
                },
                url: 'https://bem.info/',
                content: 'Проектов',
                target: '_blank'
              }]
            }, {
              block: 'product',
              mix: {
                block: 'testimonials',
                elem: 'item'
              },
              content: [{
                block: 'number',
                mix: {
                  block: 'product',
                  elem: 'number'
                },
                content: '69'
              }, {
                block: 'link',
                mods: {
                  theme: 'islands',
                  size: 'xl'
                },
                mix: {
                  block: 'text',
                  elem: 'circle'
                },
                url: 'https://bem.info/',
                content: 'Компаний',
                target: '_blank'
              }]
            }, {
              block: 'product',
              mix: {
                block: 'testimonials',
                elem: 'item'
              },
              content: [{
                block: 'number',
                mix: {
                  block: 'product',
                  elem: 'number'
                },
                content: '1642'
              }, {
                block: 'link',
                mods: {
                  theme: 'islands',
                  size: 'xl'
                },
                mix: {
                  block: 'text',
                  elem: 'circle'
                },
                url: 'https://bem.info/',
                content: 'Отработанных часов',
                target: '_blank'
              }]
            }]
          }]
        }
      }
    }
  }, {
    block: 'product',
    mix: {
      block: 'header',
      elem: 'product'
    },
    mods: {
      height: 'h'
    },
    content: [{
      block: 'text',
      mix: {
        block: 'text',
        elem: 'h2'
      },
      tag: 'h2',
      content: 'Отзывы'
    }]
  }, {
    block: 'section',
    cls: 'say',
    content: {
      block: 'say',
      mix: {
        block: 'say',
        elem: 'wrap'
      },
      content: [, {
        block: 'gallery',
        content: [{
          block: 'slider',
          content: [{
            block: 'nav',
            mix: {
              block: 'slider',
              elem: 'nav'
            },
            tag: 'ul',
            content: [{
              body: 'Обратились с мужем к вам, не думали,что получим такой отклик на наши желания. Очень порадовали) Я довольна!',
              client: 'Алина Полина',
              src: ''
            }, {
              body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
              client: 'Алина Полина'
            }, {
              body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
              client: 'Алина Полина'
            }, {
              body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
              client: 'Алина Полина'
            }, {
              body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
              client: 'Алина Полина'
            }, {
              body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
              client: 'Алина Полина'
            }, {
              body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
              client: 'Алина Полина'
            }, {
              body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
              client: 'Алина Полина'
            }, {
              body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
              client: 'Алина Полина'
            }, {
              body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
              client: 'Алина Полина'
            }, {
              body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
              client: 'Алина Полина'
            }, {
              body: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.',
              client: 'Алина Полина'
            }].map(function(item) {
              return {
                block: 'nav-item',
                tag: 'li',
                mods: {
                  type: 'link'
                },
                content: [{
                  block: 'body',
                  tag: 'span',
                  mix: {
                    block: 'content',
                    elem: 'body'
                  },
                  mods: {
                    width: 'w'
                  },
                  content: item.body
                }, {
                  block: 'content',
                  tag: 'span',
                  mix: {
                    block: 'content',
                    elem: 'image'
                  },
                  content: {
                    block: 'image',
                    url: '../../img/client.jpg'
                  }
                }, {
                  block: 'body',
                  mix: {
                    block: 'content',
                    elem: 'name'
                  },
                  content: item.client
                }]
              };
            })
          }]
        }]
      }]
    }
  },{
    block: 'product',
    mix: {
      block: 'header',
      elem: 'product'
    },
    mods: {
      height: 'h'
    },
    content: [{
      block: 'text',
      mix: {
        block: 'text',
        elem: 'h2'
      },
      tag: 'h2',
      content: 'Отзывы'
    }]
  },{
    block: 'pricing',
    mix: {
      block: 'pricing',
      elem: 'main'
    },
    content: {
      block: 'main-menu',
      content: [{
        elem: 'section',
        content: {
          elem: 'list',
          cls: 'pick',
          content: [{
            elem: 'item',
            elemMods: {
              color: 'black'
            },
            attrs: {
              id: 'individual'
            },
            content: {
              block: 'link',
              mods: {
                theme: 'islands',
                size: 'x'
              },
              url: 'javascript:void(0);',
              content: 'для физических лиц'
            }
          }, {
            elem: 'item',
            elemMods: {
              color: 'black'
            },
            attrs: {
              id: 'entity'
            },
            content: {
              block: 'link',
              mods: {
                theme: 'islands',
                size: 'x',
              },
              url: 'javascript:void(0);',
              content: 'для юридических лиц'
            }
          }]
        }
      }]
    }
  },{
    block: 'section',
    cls: 'pricing',
    content: [{
      block: 'plan',
      mix: {
        block: 'pricing',
        elem: 'plan'
      },
      mods:{
        i: 'individual'
      },
      content: [{
        block: 'personal',
        content: [{
          block: 'wrap-personal',
          content: [{
            block: 'text',
            mix: {
              block: 'text',
              elem: 'plan'
            },
            content: 'Химчистка'
          }, {
            block: 'text-footer',
            mix: {
              block: 'personal',
              elem: 'text-footer'
            },
            content: {
              block: 'sale',
              mix: {
                block: 'pricing',
                elem: 'sale'
              },
              tag: 'span',
              content: {
                block: 'main-menu',
                content: [{
                  elem: 'section',
                  content: {
                    elem: 'list',
                    cls: 'isotope',
                    content: [{
                      elem: 'item',
                      elemMods: {
                        color: 'black'
                      },
                      content: {
                        block: 'link', 
                        mods: {
                          theme: 'islands',
                          size: 'x'
                        },
                        url: 'javascript:void(0);',
                        content: 'за'
                      }
                    }, {
                      elem: 'item',
                      elemMods: {
                        color: 'black'
                      },
                      content: {
                        block: 'link',
                        mods: {
                          theme: 'islands',
                          size: 'x'
                        },
                        url: 'javascript:void(0);',
                        content: '48 руб.'
                      }
                    }]
                  }
                }]
              }
            }
          }, {
            block: 'button',
            mix: {
              block: 'description',
              elem: 'button'
            },
            mods: {
              theme: 'y',
              size: 'l',
              type: 'submit'
            },
            text: 'Заказать'
          }, {
            block: 'pricing',
            mix: {
              block: 'pricing',
              elem: 'wrap-text'
            },
            content: [{
              block: 'main-menu',
              content: [{
                elem: 'section',
                content: {
                  elem: 'list',
                  content: [{
                    elem: 'pricing',
                    content: [{
                      block: 'navigation',
                      mix: {
                        block: 'navigation',
                        elem: 'pricing'
                      },
                      content: [{
                        content: 'Удаление пятен;'
                      }, {
                        content: 'Удаление жвачек'
                      }, {
                        content: 'Влажная чистка тканей;'
                      }, {
                        content: 'Влажная чистка кожи вручную;'
                      }].map(function(item) {
                        return {
                          block: 'itm',
                          tag: 'li',
                          content: item.content
                        }
                      })
                    }]
                  }]
                }
              }]
            }]
          }]
        }]
      }, {
        block: 'professional',
        content: [{
          block: 'wrap-professional',
          content: [{
            block: 'text',
            mix: {
              block: 'text',
              elem: 'plan'
            },
            content: 'Экспресс уборка квартир'
          }, {
            block: 'text-footer',
            mix: {
              block: 'personal',
              elem: 'text-footer'
            },
            content: {
              block: 'sale',
              mix: {
                block: 'pricing',
                elem: 'sale'
              },
              tag: 'span',
              content: {
                block: 'main-menu',
                content: [{
                  elem: 'section',
                  content: {
                    elem: 'list',
                    cls: 'isotope',
                    content: [{
                      elem: 'item',
                      elemMods: {
                        color: 'black'
                      },
                      content: {
                        block: 'link', 
                        mods: {
                          theme: 'islands',
                          size: 'x'
                        },
                        url: 'javascript:void(0);',
                        content: 'за'
                      }
                    }, {
                      elem: 'item',
                      elemMods: {
                        color: 'black'
                      },
                      content: {
                        block: 'link',
                        mods: {
                          theme: 'islands',
                          size: 'x'
                        },
                        url: 'javascript:void(0);',
                        content: '48 руб.'
                      }
                    }]
                  }
                }]
              }
            }
          }, {
            block: 'button',
            mix: {
              block: 'description',
              elem: 'button'
            },
            mods: {
              theme: 'y',
              size: 'l',
              type: 'submit'
            },
            text: 'Заказать'
          }, {
            block: 'pricing',
            mix: {
              block: 'pricing',
              elem: 'wrap-text'
            },
            content: [{
              block: 'main-menu',
              content: [{
                elem: 'section',
                content: {
                  elem: 'list',
                  content: [{
                    elem: 'pricing',
                    content: [{
                      block: 'navigation',
                      mix: {
                        block: 'navigation',
                        elem: 'pricing'
                      },
                      content: [{
                        content: 'Удаление пятен;'
                      }, {
                        content: 'Удаление жвачки;'
                      }, {
                        content: 'Влажная чистка тканей;'
                      }, {
                        content: 'Влажная чистка кожи вручную;'
                      }].map(function(item) {
                        return {
                          block: 'itm',
                          tag: 'li',
                          content: item.content
                        }
                      })
                    }]
                  }]
                }
              }]
            }]
          }]
        }]
      }, {
        block: 'business',
        content: [{
          block: 'wrap-business',
          content: [{
            block: 'text',
            mix: {
              block: 'text',
              elem: 'plan'
            },
            content: 'Генеральная уборка'
          }, {
            block: 'text-footer',
            mix: {
              block: 'personal',
              elem: 'text-footer'
            },
            content: {
              block: 'sale',
              mix: {
                block: 'pricing',
                elem: 'sale'
              },
              tag: 'span',
              content: {
                block: 'main-menu',
                content: [{
                  elem: 'section',
                  content: {
                    elem: 'list',
                    cls: 'isotope',
                    content: [{
                      elem: 'item',
                      elemMods: {
                        color: 'black'
                      },
                      content: {
                        block: 'link', 
                        mods: {
                          theme: 'islands',
                          size: 'x'
                        },
                        url: 'javascript:void(0);',
                        content: 'за'
                      }
                    }, {
                      elem: 'item',
                      elemMods: {
                        color: 'black'
                      },
                      content: {
                        block: 'link',
                        mods: {
                          theme: 'islands',
                          size: 'x'
                        },
                        url: 'javascript:void(0);',
                        content: '48 руб.'
                      }
                    }]
                  }
                }]
              }
            }
          }, {
            block: 'button',
            mix: {
              block: 'description',
              elem: 'button'
            },
            mods: {
              theme: 'y',
              size: 'l',
              type: 'submit'
            },
            text: 'Заказать'
          }, {
            block: 'pricing',
            mix: {
              block: 'pricing',
              elem: 'wrap-text'
            },
            content: [{
              block: 'main-menu',
              content: [{
                elem: 'section',
                content: {
                  elem: 'list',
                  content: [{
                    elem: 'pricing',
                    content: [{
                      block: 'navigation',
                      mix: {
                        block: 'navigation',
                        elem: 'pricing'
                      },
                      content: [{
                        content: 'Удаление пятен;'
                      }, {
                        content: 'Удаление жвачки;'
                      }, {
                        content: 'Влажная чистка тканей;'
                      }, {
                        content: 'Влажная чистка кожи вручную;'
                      }].map(function(item) {
                        return {
                          block: 'itm',
                          tag: 'li',
                          content: item.content
                        }
                      })
                    }]
                  }]
                }
              }]
            }]
          }]
        }]
      }]
    },{
      block: 'plan',
      mix: {
        block: 'pricing',
        elem: 'plan'
      },
      mods:{
        i: 'entity'
      },
      content: [{
        block: 'personal',
        content: [{
          block: 'wrap-personal',
          content: [{
            block: 'text',
            mix: {
              block: 'text',
              elem: 'plan'
            },
            content: 'Химчистка'
          }, {
            block: 'text-footer',
            mix: {
              block: 'personal',
              elem: 'text-footer'
            },
            content: {
              block: 'sale',
              mix: {
                block: 'pricing',
                elem: 'sale'
              },
              tag: 'span',
              content: {
                block: 'main-menu',
                content: [{
                  elem: 'section',
                  content: {
                    elem: 'list',
                    cls: 'isotope',
                    content: [{
                      elem: 'item',
                      elemMods: {
                        color: 'black'
                      },
                      content: {
                        block: 'link', 
                        mods: {
                          theme: 'islands',
                          size: 'x'
                        },
                        url: 'javascript:void(0);',
                        content: 'за'
                      }
                    }, {
                      elem: 'item',
                      elemMods: {
                        color: 'black'
                      },
                      content: {
                        block: 'link',
                        mods: {
                          theme: 'islands',
                          size: 'x'
                        },
                        url: 'javascript:void(0);',
                        content: '48 руб.'
                      }
                    }]
                  }
                }]
              }
            }
          }, {
            block: 'button',
            mix: {
              block: 'description',
              elem: 'button'
            },
            mods: {
              theme: 'y',
              size: 'l',
              type: 'submit'
            },
            text: 'Заказать'
          }, {
            block: 'pricing',
            mix: {
              block: 'pricing',
              elem: 'wrap-text'
            },
            content: [{
              block: 'main-menu',
              content: [{
                elem: 'section',
                content: {
                  elem: 'list',
                  content: [{
                    elem: 'pricing',
                    content: [{
                      block: 'navigation',
                      mix: {
                        block: 'navigation',
                        elem: 'pricing'
                      },
                      content: [{
                        content: 'Удаление пятен;'
                      }, {
                        content: 'Удаление жвачки;'
                      }, {
                        content: 'Влажная чистка тканей;'
                      }, {
                        content: 'Влажная чистка кожи вручную;'
                      }].map(function(item) {
                        return {
                          block: 'itm',
                          tag: 'li',
                          content: item.content
                        }
                      })
                    }]
                  }]
                }
              }]
            }]
          }]
        }]
      }, {
        block: 'professional',
        content: [{
          block: 'wrap-professional',
          content: [{
            block: 'text',
            mix: {
              block: 'text',
              elem: 'plan'
            },
            content: 'Экспресс уборка квартир'
          }, {
            block: 'text-footer',
            mix: {
              block: 'personal',
              elem: 'text-footer'
            },
            content: {
              block: 'sale',
              mix: {
                block: 'pricing',
                elem: 'sale'
              },
              tag: 'span',
              content: {
                block: 'main-menu',
                content: [{
                  elem: 'section',
                  content: {
                    elem: 'list',
                    cls: 'isotope',
                    content: [{
                      elem: 'item',
                      elemMods: {
                        color: 'black'
                      },
                      content: {
                        block: 'link', 
                        mods: {
                          theme: 'islands',
                          size: 'x'
                        },
                        url: 'javascript:void(0);',
                        content: 'за'
                      }
                    }, {
                      elem: 'item',
                      elemMods: {
                        color: 'black'
                      },
                      content: {
                        block: 'link',
                        mods: {
                          theme: 'islands',
                          size: 'x'
                        },
                        url: 'javascript:void(0);',
                        content: '48 руб.'
                      }
                    }]
                  }
                }]
              }
            }
          }, {
            block: 'button',
            mix: {
              block: 'description',
              elem: 'button'
            },
            mods: {
              theme: 'y',
              size: 'l',
              type: 'submit'
            },
            text: 'Заказать'
          }, {
            block: 'pricing',
            mix: {
              block: 'pricing',
              elem: 'wrap-text'
            },
            content: [{
              block: 'main-menu',
              content: [{
                elem: 'section',
                content: {
                  elem: 'list',
                  content: [{
                    elem: 'pricing',
                    content: [{
                      block: 'navigation',
                      mix: {
                        block: 'navigation',
                        elem: 'pricing'
                      },
                      content: [{
                        content: 'Удаление пятен;'
                      }, {
                        content: 'Удаление жвачки;'
                      }, {
                        content: 'Влажная чистка тканей;'
                      }, {
                        content: 'Влажная чистка кожи вручную;'
                      }].map(function(item) {
                        return {
                          block: 'itm',
                          tag: 'li',
                          content: item.content
                        }
                      })
                    }]
                  }]
                }
              }]
            }]
          }]
        }]
      }, {
        block: 'business',
        content: [{
          block: 'wrap-business',
          content: [{
            block: 'text',
            mix: {
              block: 'text',
              elem: 'plan'
            },
            content: 'Генеральная уборка'
          }, {
            block: 'text-footer',
            mix: {
              block: 'personal',
              elem: 'text-footer'
            },
            content: {
              block: 'sale',
              mix: {
                block: 'pricing',
                elem: 'sale'
              },
              tag: 'span',
              content: {
                block: 'main-menu',
                content: [{
                  elem: 'section',
                  content: {
                    elem: 'list',
                    cls: 'isotope',
                    content: [{
                      elem: 'item',
                      elemMods: {
                        color: 'black'
                      },
                      content: {
                        block: 'link', 
                        mods: {
                          theme: 'islands',
                          size: 'x'
                        },
                        url: 'javascript:void(0);',
                        content: 'за'
                      }
                    }, {
                      elem: 'item',
                      elemMods: {
                        color: 'black'
                      },
                      content: {
                        block: 'link',
                        mods: {
                          theme: 'islands',
                          size: 'x'
                        },
                        url: 'javascript:void(0);',
                        content: '48 руб.'
                      }
                    }]
                  }
                }]
              }
            }
          }, {
            block: 'button',
            mix: {
              block: 'description',
              elem: 'button'
            },
            mods: {
              theme: 'y',
              size: 'l',
              type: 'submit'
            },
            text: 'Заказать'
          }, {
            block: 'pricing',
            mix: {
              block: 'pricing',
              elem: 'wrap-text'
            },
            content: [{
              block: 'main-menu',
              content: [{
                elem: 'section',
                content: {
                  elem: 'list',
                  content: [{
                    elem: 'pricing',
                    content: [{
                      block: 'navigation',
                      mix: {
                        block: 'navigation',
                        elem: 'pricing'
                      },
                      content: [{
                        content: 'Удаление пятен;'
                      }, {
                        content: 'Удаление жвачки;'
                      }, {
                        content: 'Влажная чистка тканей;'
                      }, {
                        content: 'Влажная чистка кожи вручную;'
                      }].map(function(item) {
                        return {
                          block: 'itm',
                          tag: 'li',
                          content: item.content
                        }
                      })
                    }]
                  }]
                }
              }]
            }]
          }]
        }]
      }]
    }]
  }, {
    block: 'product',
    mix: {
      block: 'header',
      elem: 'product'
    },
    mods: {
      height: 'h'
    },
    content: [{
      block: 'text',
      mix: {
        block: 'text',
        elem: 'h2'
      },
      tag: 'h2',
      content: 'Часто задаваемые вопросы'
    }]
  }, {
    block: 'section',
    cls: 'question',
    content: {
      block: 'container',
      content: {
        block: 'row',
        content: [, {
          block: 'accordion',
          content: [{
            block: 'text',
            mix: {
              block: 'text',
              elem: 'h3'
            },
            content: 'Нужно ли мне быть дома во время уборки?'
          }, {
            block: 'text',
            mods: {
              accordion: 't'
            },
            content: 'Большинство клиентов остаются дома, когда впервые заказывают уборку. Но в следующий раз они предпочитают оставить менеджера и клинеров дома. А в свободное время предпочитают заняться более важными делами.'
          },{
            block: 'text',
            mix: {
              block: 'text',
              elem: 'h3'
            },
            content: 'После химчистки диван вновь станет как новый?'
          }, {
            block: 'text',
            mods: {
              accordion: 't'
            },
            content: 'Мы гарантируем что он станет абсолютно чистым, механические повреждения, износ останется на месте. Именно поэтому советуем бережно относиться к мебели, а её чистота это наша забота!'
          }, {
            block: 'text',
            mix: {
              block: 'text',
              elem: 'h3'
            },
            content: 'Не испортите ли вы мне что то?'
          }, {
            block: 'text',
            mods: {
              accordion: 't'
            },
            content: 'Опыт нашей работы больше 4 лет. Каждый сотрудник проходит уникальную программу обучения. Клинеры знают каким способом и на каких поверхностях нужно использовать специализированную химию. Поэтому мы обеспечим сохранность Вашего имущества.'
          },{
            block: 'text',
            mix: {
              block: 'text',
              elem: 'h3'
            },
            content: 'Действуют ли скидки для клиентов с постоянным обслуживанием?'
          }, {
            block: 'text',
            mods: {
              accordion: 't'
            },
            content: 'Все договора на постоянную уборку рассматриваются в индивидуальном порядке. Рассматривается система скидок для каждого клиента.'
          },{
            block: 'text',
            mix: {
              block: 'text',
              elem: 'h3'
            },
            content: 'Сколько клинеров приедет на заказ?'
          }, {
            block: 'text',
            mods: {
              accordion: 't'
            },
            content: 'В зависимости от уровня загрязнения и объема работ. Это может быть как 1 человек, так и 12 человек. Все строго индивидуально.'
          },{
            block: 'text',
            mix: {
              block: 'text',
              elem: 'h3'
            },
            content: 'Как долго будет выполняться химчистка?'
          }, {
            block: 'text',
            mods: {
              accordion: 't'
            },
            content: 'Химчистка 3-х местного или 4-х местного дивана займёт примерно 1 час 30 минут-2 часа. Химчистка матраса - 1 час 30 минут. Стула со спинкой – 10 минут, кресла – 30 минут.'
          }, {
            block: 'text',
            mix: {
              block: 'text',
              elem: 'h3'
            },
            content: 'Во время процедуры химчистки много шума?'
          }, {
            block: 'text',
            mods: {
              accordion: 't'
            },
            content: 'Звук чуть громче, чем от обычного домашнего пылесоса.'
          }, {
            block: 'text',
            mix: {
              block: 'text',
              elem: 'h3'
            },
            content: 'Сильно ли пахнет химия? Едкий ли запах?'
          }, {
            block: 'text',
            mods: {
              accordion: 't'
            },
            content: 'Не каких резких запахов нет,используем безопасные и гипоаллергенные средства'
          }, {
            block: 'text',
            mix: {
              block: 'text',
              elem: 'h3'
            },
            content: 'Сколько сохнет диван?'
          }, {
            block: 'text',
            mods: {
              accordion: 't'
            },
            content: '6-9 часов. Время высыхания зависит от объема изделия, а также от температуры и потока воздуха (открытое окно или форточка).'
          }, {
            block: 'text',
            mix: {
              block: 'text',
              elem: 'h3'
            },
            content: 'Не изменится ли цвет ткани после химчистки?'
          }, {
            block: 'text',
            mods: {
              accordion: 't'
            },
            content: 'Изменения цвета не происходит, ткань не линяет и не окрашивается. Наоборот, цвет становится ярче за счет удаления пыли и грязи.'
          }, {
            block: 'text',
            mix: {
              block: 'text',
              elem: 'h3'
            },
            content: 'Есть ли скидка при большом объёме заказа?'
          }, {
            block: 'text',
            mods: {
              accordion: 't'
            },
            content: 'При заказе свыше 3000 рублей скидка 10%.'
          }, {
            block: 'text',
            mix: {
              block: 'text',
              elem: 'h3'
            },
            content: 'Вы работаете в выходные?'
          }, {
            block: 'text',
            mods: {
              accordion: 't'
            },
            content: 'Да, выезжаем. Детали уточняйте по телефону ☎ 8-999-171-76-31 или личным сообщением'
          }]
        }]
      }
    }
  }, {
    block: 'section',
    cls: 'map',
    content: [{
      block: 'product',
      mix: {
        block: 'header',
        elem: 'product'
      },
      mods: {
        height: 'h'
      },
      content: [{
        block: 'text',
        mix: {
          block: 'text',
          elem: 'h2'
        },
        tag: 'h2',
        content: 'Где мы находимся'
      }]
    }, {
      block: 'wrap',
      mix: {
        block: 'map',
        elem: 'wrap'
      },
      content: [{
        block: 'google',
        mix: {
          block: 'map',
          elem: 'google'
        },
        content: {
          block: 'item',
          mix: {
            block: 'map',
            elem: 'item'
          },
          attrs: {
            id: 'map'
          }
        }
      }, {
        block: 'content',
        mix: {
          block: 'map',
          elem: 'content'
        },
        content: [{
          block: 'content',
          cls: 'col-xs-4',
          mix: {
            block: 'mdl',
            elem: 'content'
          },
          content: [{
            block: 'form',
            mix: {
              block: 'form',
              elem: 'width'
            },
            content: [{
              block: 'right',
              content: [{
                block: 'navigation',
                mix: {
                  block: 'form',
                  elem: 'navigation'
                },
                content: [{
                  block: 'item',
                  content: {
                    block: 'input',
                    mix: {
                      block: 'form',
                      elem: 'input'
                    },
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    placeholder: 'Имя'
                  }
                }, {
                  block: 'item',
                  content: {
                    block: 'input',
                    mix: {
                      block: 'form',
                      elem: 'input'
                    },
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    placeholder: 'Телефон'
                  }
                }, {
                  block: 'item',
                  content: {
                    block: 'input',
                    mix: {
                      block: 'form',
                      elem: 'input'
                    },
                    mods: {
                      theme: 'islands',
                      size: 'm'
                    },
                    placeholder: 'Email'
                  }
                }]
              }, {
                block: 'textarea',
                mix: {
                  block: 'form',
                  elem: 'textarea'
                },
                mods: {
                  theme: 'islands',
                  size: 'm'
                },
                placeholder: 'Описание'
              }, {
                elem: 'button',
                mix: {
                  block: 'button',
                  elem: 'description'
                },
                content: {
                  block: 'button',
                  mix: {
                    block: 'button',
                    elem: 'subscribe'
                  },
                  mods: {
                    theme: 'islands',
                    size: 'l',
                    type: 'submit'
                  },
                  text: 'Заказать'
                }
              }]
            }]
          }]
        }, {
          block: 'wrap',
          cls: 'col-xs-4',
          mix: {
            block: 'content',
            elem: 'wrap'
          },
          content: [{
            block: 'address',
            mix: {
              block: 'content',
              elem: 'address'
            },
            content: [{
              tag: 'span',
              content: 'Контакты'
            }, {
              block: 'text',
              content: 'Самара ул. Авроры 139'
            }]
          }, {
            block: 'phone',
            mix: {
              block: 'content',
              elem: 'phone'
            },
            content: [{
              tag: 'span',
              content: 'Телефоны:'
            }, {
              content: [{
                elem: 'section',
                content: {
                  elem: 'list',
                  content: [{
                    elem: 'item',
                    content: {
                      block: 'navigation',
                      content: [{
                        body: '+79277146878 - Ульяновск'
                      }, {
                        body: '+79277146878 - Самара'
                      }, {
                        body: '+79277146878 - Москва'
                      }, {
                        body: '+79277146878 - Тольятти'
                      }].map(function(item) {
                        return {
                          block: 'item',
                          content: [{
                            block: 'icons'
                          }, {
                            content: item.body
                          }]
                        }
                      })
                    }
                  }]
                }
              }]
            }]
          }, {
            block: 'email',
            mix: {
              block: 'content',
              elem: 'email'
            },
            contact: [{
              tag: 'span',
              content: 'Контакты'
            }, {
              tag: 'span',
              contact: 'Самара ул. Авроры 139'
            }]
          }]
        }]
      }]
    }]
  }]
};
